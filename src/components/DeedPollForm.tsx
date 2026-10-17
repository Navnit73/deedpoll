"use client";

import Link from 'next/link';
import { useState, useEffect, FormEvent, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

function Field({ id, label, hint, errors, children }: { id: string, label: string, hint?: ReactNode, errors: { message: string }[], children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block font-bold text-[#0b0c0c] mb-1">{label}</label>
      {hint && <p className="text-gray-600 text-sm mb-1.5">{hint}</p>}
      {children}
      {errors.map((e, idx) => (
        <p key={idx} className="text-red-700 text-sm font-medium mt-1">{e.message}</p>
      ))}
    </div>
  );
}

function Section({ step, title, children }: { step: number, title: string, children: ReactNode }) {
  return (
    <fieldset className="space-y-4">
      <legend className="flex items-center gap-2 text-lg font-bold text-[#0b0c0c] mb-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1d70b8] text-white text-sm">{step}</span>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

type DeedPollFormProps = {
  // Embedded on guide pages: renders an h2 heading and drops the page padding.
  embedded?: boolean;
  heading?: string;
  intro?: ReactNode;
};

export default function DeedPollForm({ embedded = false, heading = 'Create your deed poll', intro }: DeedPollFormProps) {
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
        let decodedStr = '';
        const b64Str = window.location.hash.slice(1);
        try {
          decodedStr = atob(b64Str);
        } catch(e) {
          decodedStr = decodeURIComponent(escape(atob(b64Str)));
        }
        const decoded = JSON.parse(decodedStr);
        setFormData(prev => ({ ...prev, ...decoded }));
      } catch (e) {
        console.error("Failed to parse hash", e);
      }
    } else {
      try {
        const stored = sessionStorage.getItem('deedpoll_data');
        if (stored) {
           const decoded = JSON.parse(stored);
           setFormData(prev => ({ ...prev, ...decoded }));
        }
      } catch (e) {
        console.error("Failed to parse session storage", e);
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
    
    // Save to sessionStorage
    sessionStorage.setItem('deedpoll_data', JSON.stringify(dataToSave));
    
    // Push using router
    router.push(`/preview`);
  };

  const isInvalid = (id: string) => showErrors && errors.some(e => e.field === id);
  const fieldErrors = (id: string) => showErrors ? errors.filter(e => e.field === id) : [];
  const inputClassName = (id: string) => `w-full border-2 px-3 py-2 text-base focus:ring-2 outline-none transition-all ${isInvalid(id) ? 'border-red-600 focus:border-red-600 focus:ring-red-200' : 'border-[#0b0c0c] focus:border-[#1d70b8] focus:ring-[#1d70b8]'}`;
  const linkClassName = 'text-[#1d70b8] underline underline-offset-2 hover:text-[#003078]';

  return (
    <div id="create-deed-poll" className={embedded ? 'scroll-mt-24' : 'max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12'}>
      {embedded ? (
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h2>
      ) : (
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{heading}</h1>
      )}
      <p className="text-gray-700 mb-6">
        {intro ?? <>Takes about 2 minutes. Not sure about something? See the <Link href="/checklist" className={linkClassName}>checklist</Link> or <Link href="/faq" className={linkClassName}>FAQ</Link>.</>}
      </p>

      <form id="deed-poll" className="space-y-8 bg-white border-t-[6px] border-[#1d70b8] p-5 sm:p-8 shadow-sm" onSubmit={handleSubmit}>
        <Section step={1} title="Your names">
          <p className="text-gray-600 text-sm -mt-2">
            Full names without titles (Mr, Dr) or suffixes (PhD) — <Link href="/faq#change-of-title" className={linkClassName}>why?</Link>
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="old-name" errors={fieldErrors('oldName')} label="Old name">
              <input type="text" id="old-name" value={formData.oldName} onChange={handleChange} autoComplete="name" placeholder="e.g. Jane Mary Smith" className={inputClassName('oldName')} />
            </Field>
            <Field id="new-name" errors={fieldErrors('newName')} label="New name">
              <input type="text" id="new-name" value={formData.newName} onChange={handleChange} autoComplete="name" placeholder="e.g. Jane Mary Jones" className={inputClassName('newName')} />
            </Field>
          </div>
          <div>
            <label htmlFor="first-name-changed" className="flex items-center gap-2 cursor-pointer text-[#0b0c0c]">
              <input type="checkbox" id="first-name-changed" checked={formData.firstNameChanged} onChange={handleChange} className="w-5 h-5 border-2 border-[#0b0c0c] text-[#1d70b8] cursor-pointer" />
              <span className="font-bold">I’ve changed my first name</span>
              <Link href="/faq#vaisey" className={`${linkClassName} text-sm`}>why?</Link>
            </label>
            {fieldErrors('firstNameChanged').map((e, idx) => (
              <p key={idx} className="text-red-700 text-sm font-medium mt-1">{e.message}</p>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            <Link href="/faq#legal-restrictions" className={linkClassName}>What names can I choose?</Link>
          </p>
        </Section>

        <hr className="border-gray-200" />

        <Section step={2} title="Address & date">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <Field id="address" errors={fieldErrors('address')} label="Address" hint="Street and town/city. If you add county or postcode, do the same for witnesses.">
                <input type="text" id="address" value={formData.address} onChange={handleChange} autoComplete="street-address" placeholder="e.g. 12 High Street, Leeds" className={inputClassName('address')} />
              </Field>
            </div>
            <Field id="county" errors={fieldErrors('county')} label="County (optional)">
              <input type="text" id="county" value={formData.county} onChange={handleChange} autoComplete="address-level1" className={inputClassName('county')} />
            </Field>
          </div>
          <div className="sm:w-1/3">
            <Field id="date" errors={fieldErrors('date')} label="Date of change" hint="The day you'll sign it.">
              <input type="date" id="date" value={formData.date} onChange={handleChange} className={inputClassName('date')} />
            </Field>
          </div>
        </Section>

        <hr className="border-gray-200" />

        <Section step={3} title="Witnesses">
          <p className="text-gray-600 text-sm -mt-2">
            Two adults, ideally not relatives — <Link href="/faq#witnesses" className={linkClassName}>who can be a witness?</Link>
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {([['first', 'First'], ['second', 'Second']] as const).map(([key, label]) => (
              <div key={key} className="space-y-3 bg-gray-50 border border-gray-200 p-4">
                <p className="text-sm font-bold uppercase tracking-wide text-gray-500">{label} witness</p>
                <Field id={`${key}-witness-name`} errors={fieldErrors(`${key}WitnessName`)} label="Name">
                  <input type="text" id={`${key}-witness-name`} value={formData[`${key}WitnessName`]} onChange={handleChange} className={inputClassName(`${key}WitnessName`)} />
                </Field>
                <Field id={`${key}-witness-address`} errors={fieldErrors(`${key}WitnessAddress`)} label="Address">
                  <input type="text" id={`${key}-witness-address`} value={formData[`${key}WitnessAddress`]} onChange={handleChange} className={inputClassName(`${key}WitnessAddress`)} />
                </Field>
              </div>
            ))}
          </div>
        </Section>

        {showErrors && errors.length > 0 && (
          <article id="deed-poll-validation-errors" className="bg-red-50 border-l-4 border-red-600 p-4">
            <p className="font-bold text-red-700 mb-2">
              Please check {errors.length === 1 ? '1 thing' : `${errors.length} things`} highlighted above.
            </p>
            <label htmlFor="skip-validation" className="flex items-center gap-2 cursor-pointer text-red-700 text-sm font-medium">
              <input type="checkbox" id="skip-validation" checked={formData.skipValidation} onChange={handleChange} className="w-5 h-5 border-2 border-red-600 cursor-pointer" />
              I’ve read these warnings and want to continue anyway.
            </label>
          </article>
        )}

        <button type="submit" disabled={isGenerating} className="bg-[#00703c] hover:bg-[#005a30] text-white font-bold py-3 px-10 shadow-[0_3px_0_0_#002d18] active:shadow-none active:translate-y-[3px] transition-all text-lg w-full sm:w-auto cursor-pointer disabled:opacity-50">
          {isGenerating ? 'Generating...' : 'Create Deed Poll →'}
        </button>
      </form>
    </div>
  );
}
