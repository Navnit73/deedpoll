"use client";

import Link from 'next/link';
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

// Note: client components cannot export metadata. 
// We would normally move this to a layout or wrap it, but for now we skip metadata export here or move it to a layout.

export default function DeedPollForm() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    oldName: '',
    newName: '',
    firstNameChanged: false,
    address: '',
    county: '',
    date: '',
    firstWitnessName: '',
    firstWitnessAddress: '',
    secondWitnessName: '',
    secondWitnessAddress: '',
    skipValidation: false
  });

  const [errors, setErrors] = useState<{field: string, message: string}[]>([]);
  const [showErrors, setShowErrors] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (window.location.hash.length > 1) {
      try {
        const decoded = JSON.parse(atob(window.location.hash.slice(1)));
        setFormData(prev => ({ ...prev, ...decoded }));
      } catch (e) {
        console.error("Failed to parse hash", e);
      }
    }
    
    setFormData(prev => {
      if (!prev.date) {
        return { ...prev, date: new Date().toISOString().split('T')[0] };
      }
      return prev;
    });
  }, []);

  const validate = (data = formData, disallowBlanks = false) => {
    const validationErrors: {field: string, message: string}[] = [];

    if(disallowBlanks) {
      if(data.oldName === '') validationErrors.push({ field: 'oldName', message: 'The "old name" field is blank.' });
      if(data.newName === '') validationErrors.push({ field: 'newName', message: 'The "new name" field is blank.' });
      if(data.address === '') validationErrors.push({ field: 'address', message: 'The "address" field is blank.' });
      if(data.date === '') validationErrors.push({ field: 'date', message: 'The "date" field is blank.' });
      if(data.firstWitnessName === '') validationErrors.push({ field: 'firstWitnessName', message: 'The "first witness\'s name" field is blank.' });
      if(data.firstWitnessAddress === '') validationErrors.push({ field: 'firstWitnessAddress', message: 'The "first witness\'s address" field is blank.' });
      if(data.secondWitnessName === '') validationErrors.push({ field: 'secondWitnessName', message: 'The "second witness\'s name" field is blank.' });
      if(data.secondWitnessAddress === '') validationErrors.push({ field: 'secondWitnessAddress', message: 'The "second witness\'s address" field is blank.' });
    }

    if(data.newName !== '' && data.oldName !== '' && data.newName === data.oldName) 
      validationErrors.push({ field: 'newName', message: 'The "old name" and "new name" are the same.' });
    
    if(data.oldName !== '' && !data.oldName.match(/\S+\s+\S+/)) validationErrors.push({ field: 'oldName', message: 'Your old name looks like it only contains one name. If that\'s correct, that\'s fine, but please check!' });
    if(data.newName !== '' && !data.newName.match(/\S+\s+\S+/)) validationErrors.push({ field: 'newName', message: 'Your new name looks like it only contains one name.' });
    if(data.newName !== '' && !data.newName.match(/^[a-z\s\-\']+$/i)) validationErrors.push({ field: 'newName', message: 'Your new name contains characters that don\'t appear in the Latin alphabet. This isn\'t necessarily a problem, but your name may be adapted for use in some contexts.' });
    
    const suspectedOldFirstName = data.oldName.split(' ')[0];
    const suspectedNewFirstName = data.newName.split(' ')[0];
    
    if(data.oldName && data.newName && suspectedOldFirstName !== suspectedNewFirstName && !data.firstNameChanged) {
      validationErrors.push({ field: 'firstNameChanged', message: 'It looks like you\'ve changed your first name, but not ticked the "I\'ve changed my first name" box.' });
    }
    if(data.oldName && data.newName && suspectedOldFirstName === suspectedNewFirstName && data.firstNameChanged) {
      validationErrors.push({ field: 'firstNameChanged', message: 'You\'ve ticked the "I\'ve changed my first name" box, but it doesn\'t look like you have changed your first name.' });
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  useEffect(() => {
    validate(formData, false);
  }, [formData]);

  const handleChange = (e: any) => {
    const { id, type, checked, value } = e.target;
    let key = id;
    if(id === 'old-name') key = 'oldName';
    if(id === 'new-name') key = 'newName';
    if(id === 'first-name-changed') key = 'firstNameChanged';
    if(id === 'first-witness-name') key = 'firstWitnessName';
    if(id === 'first-witness-address') key = 'firstWitnessAddress';
    if(id === 'second-witness-name') key = 'secondWitnessName';
    if(id === 'second-witness-address') key = 'secondWitnessAddress';
    if(id === 'skip-validation') key = 'skipValidation';

    setFormData(prev => ({
      ...prev,
      [key]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowErrors(true);
    
    const isValid = validate(formData, true);
    if (!isValid && !formData.skipValidation) {
      document.getElementById('deed-poll-validation-errors')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsGenerating(true);

    const dataToSave = { ...formData };
    delete (dataToSave as any).skipValidation;
    // Safely encode to base64, supporting UTF-8 characters if any
    const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(dataToSave))));
    
    // Push using router instead of modifying window.location directly
    router.push(`/preview#${b64}`);
  };

  const isInvalid = (id: string) => showErrors && errors.some(e => e.field === id);
  const inputClassName = (id: string) => `w-full border-2 p-2 text-lg focus:ring-4 outline-none transition-all ${isInvalid(id) ? 'border-red-600 focus:border-red-600 focus:ring-red-200' : 'border-[#0b0c0c] focus:border-[#1d70b8] focus:ring-[#1d70b8]'}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
        Create your deed poll
      </h1>

      <p className="text-xl mb-8">
        Once you've <Link href="/checklist" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">read the checklist</Link> and <Link href="/faq" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">had any questions answered</Link>, fill out the form below to create your deed poll:
      </p>

      <form id="deed-poll" className="space-y-8 bg-white border-t-[8px] border-[#1d70b8] p-8" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="old-name" className="block text-xl font-bold text-[#0b0c0c]">
            Old name:
          </label>
          <p className="text-gray-700 text-sm max-w-2xl mb-2">
            The name you used <em>before</em> you changed your name. Enter your old full name, but do <strong>not</strong> include any title (e.g. Mrs, Dr, Mr) or suffix (e.g. PhD, Esq) (<Link href="/faq#change-of-title" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">why not?</Link>).
          </p>
          <input type="text" id="old-name" value={formData.oldName} onChange={handleChange} autoComplete="name" className={`${inputClassName('oldName')} md:w-2/3`} />
        </div>

        <div className="space-y-2">
          <label htmlFor="new-name" className="block text-xl font-bold text-[#0b0c0c]">
            New name:
          </label>
          <p className="text-gray-700 text-sm max-w-2xl mb-2">
            Your new name. Enter your new full name (<Link href="/faq#legal-restrictions" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">what can I choose?</Link>). Do not include your title (<Link href="/faq#change-of-title" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">why not?</Link>).
          </p>
          <input type="text" id="new-name" value={formData.newName} onChange={handleChange} autoComplete="name" className={`${inputClassName('newName')} md:w-2/3`} />
        </div>

        <div className="space-y-2 pt-4">
          <div className="flex items-start gap-3">
            <div className="pt-1">
              <input type="checkbox" id="first-name-changed" checked={formData.firstNameChanged} onChange={handleChange} className="w-6 h-6 border-2 border-[#0b0c0c] text-[#1d70b8] cursor-pointer" />
            </div>
            <div>
              <label htmlFor="first-name-changed" className="text-xl font-bold text-[#0b0c0c] cursor-pointer block">
                I've changed my first name
              </label>
              <p className="text-gray-700 text-sm mt-1">
                If you've changed your first name, tick this box (<Link href="/faq#vaisey" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">why?</Link>).
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300 border-t-2" />

        <div className="space-y-2">
          <label htmlFor="address" className="block text-xl font-bold text-[#0b0c0c]">
            Address:
          </label>
          <p className="text-gray-700 text-sm max-w-2xl mb-2">
            Your address. Put the street address and the town/city name. You don't have to include the county or postcode, but if you do then - for consistency - you should also include these elements in your witnesses' addresses too.
          </p>
          <input type="text" id="address" value={formData.address} onChange={handleChange} autoComplete="street-address" className={`${inputClassName('address')} md:w-2/3`} />
        </div>

        <div className="space-y-2">
          <label htmlFor="county" className="block text-xl font-bold text-[#0b0c0c]">
            County (optional):
          </label>
          <p className="text-gray-700 text-sm max-w-2xl mb-2">
            The county in which you live.
          </p>
          <input type="text" id="county" value={formData.county} onChange={handleChange} autoComplete="address-level1" className={`${inputClassName('county')} md:w-2/3`} />
        </div>

        <hr className="my-8 border-gray-300 border-t-2" />

        <div className="space-y-2">
          <label htmlFor="date" className="block text-xl font-bold text-[#0b0c0c]">
            Date of change:
          </label>
          <p className="text-gray-700 text-sm max-w-2xl mb-2">
            The date you will sign your deed poll and on which your name will legally be changed.
          </p>
          <input type="date" id="date" value={formData.date} onChange={handleChange} className={`${inputClassName('date')} md:w-1/3`} />
        </div>

        <hr className="my-8 border-gray-300 border-t-2" />

        <div className="space-y-8 bg-gray-100 p-6 sm:p-8 border-l-4 border-[#1d70b8]">
          <h3 className="text-2xl font-bold text-[#0b0c0c]">Witness Details</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="first-witness-name" className="block text-xl font-bold text-[#0b0c0c]">
                First witness's name:
              </label>
              <p className="text-gray-700 text-sm mb-2">
                (<Link href="/faq#witnesses" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">Who can be a witness?</Link>)
              </p>
              <input type="text" id="first-witness-name" value={formData.firstWitnessName} onChange={handleChange} className={inputClassName('firstWitnessName')} />
            </div>

            <div>
              <label htmlFor="first-witness-address" className="block text-xl font-bold text-[#0b0c0c] mb-2">
                First witness's address:
              </label>
              <input type="text" id="first-witness-address" value={formData.firstWitnessAddress} onChange={handleChange} className={inputClassName('firstWitnessAddress')} />
            </div>
          </div>

          <hr className="my-6 border-gray-300 border-t-2" />

          <div className="space-y-4">
            <div>
              <label htmlFor="second-witness-name" className="block text-xl font-bold text-[#0b0c0c]">
                Second witness's name:
              </label>
              <p className="text-gray-700 text-sm mb-2">
                (<Link href="/faq#witnesses" className="text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]">Who can be a witness?</Link>)
              </p>
              <input type="text" id="second-witness-name" value={formData.secondWitnessName} onChange={handleChange} className={inputClassName('secondWitnessName')} />
            </div>

            <div>
              <label htmlFor="second-witness-address" className="block text-xl font-bold text-[#0b0c0c] mb-2">
                Second witness's address:
              </label>
              <input type="text" id="second-witness-address" value={formData.secondWitnessAddress} onChange={handleChange} className={inputClassName('secondWitnessAddress')} />
            </div>
          </div>
        </div>

        {showErrors && errors.length > 0 && (
          <article id="deed-poll-validation-errors" className="bg-red-50 border-l-[8px] border-red-600 p-6 my-8">
            <p className="text-xl font-bold text-red-700 mb-4">
              Please check a few things:
            </p>
            <ul id="deed-poll-validation-errors-list" className="list-disc pl-6 space-y-2 text-red-700 font-medium mb-6">
              {errors.map((e, idx) => (
                <li key={idx}>⚠️ {e.message}</li>
              ))}
            </ul>
            
            <div className="flex items-start gap-3">
              <div className="pt-1">
                <input type="checkbox" id="skip-validation" checked={formData.skipValidation} onChange={handleChange} className="w-6 h-6 border-2 border-red-600 cursor-pointer" />
              </div>
              <label htmlFor="skip-validation" className="text-lg font-bold text-red-700 cursor-pointer">
                I've read these warnings and want to continue anyway.
              </label>
            </div>
          </article>
        )}

        <div className="pt-8">
          <button type="submit" disabled={isGenerating} className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-4 px-12 shadow-[0_4px_0_0_#002d18] active:shadow-none active:translate-y-1 transition-all text-xl w-full sm:w-auto cursor-pointer disabled:opacity-50">
            {isGenerating ? 'Generating...' : 'Create Deed Poll'}
          </button>
        </div>
      </form>
    </div>
  );
}
