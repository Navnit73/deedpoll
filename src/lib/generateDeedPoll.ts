import { jsPDF } from 'jspdf';
import './jspdf-font-OldeEnglish-normal.es.js';
import { Temporal } from 'temporal-polyfill';

export interface DeedPollSubmission {
  oldName: string;
  newName: string;
  firstNameChanged: boolean;
  address: string;
  county: string;
  date: string;
  firstWitnessName: string;
  firstWitnessAddress: string;
  secondWitnessName: string;
  secondWitnessAddress: string;
}

export function generateDeedPoll(sub: DeedPollSubmission, isPaid: boolean = false) {
  const doc = new jsPDF();
  const submission = { ...sub };

  // Data tidyup
  submission.oldName = submission.oldName?.trim() || '';
  if(submission.oldName == '') submission.oldName = '________________';
  submission.newName = submission.newName?.trim() || '';
  if(submission.newName == '') submission.newName = '________________';
  submission.address = submission.address?.trim() || '';
  if(submission.address == '') submission.address = '________________________';
  submission.county = submission.county?.trim() || '';
  submission.date = submission.date?.trim() || '';
  if(submission.date == '') submission.date = Temporal.Now.plainDateISO().toString();
  submission.firstWitnessName = submission.firstWitnessName?.trim() || '';
  if(submission.firstWitnessName == '') submission.firstWitnessName = '________________';
  submission.firstWitnessAddress = submission.firstWitnessAddress?.trim() || '';
  if(submission.firstWitnessAddress == '') submission.firstWitnessAddress = '________________________';
  submission.secondWitnessName = submission.secondWitnessName?.trim() || '';
  if(submission.secondWitnessName == '') submission.secondWitnessName = '________________';
  submission.secondWitnessAddress = submission.secondWitnessAddress?.trim() || '';
  if(submission.secondWitnessAddress == '') submission.secondWitnessAddress = '________________________';

  let html = '<h2 class="text-3xl font-bold mb-6 text-center underline font-serif">Deed of Change of Name</h2>';

  const MARGIN_LEFT_RIGHT    =  15   ; // mm
  const A4_WIDTH             = 210   ; // mm
  const TITLE_FONT_SIZE      =  24   ; // points
  const BODY_FONT_SIZE       =  11   ; // points
  const BODY_FONT            = 'times';
  const MAGIC_NUMBER_1       = 141   ; 
  const MAGIC_NUMBER_2       =   0.35; 
  const MAGIC_NUMBER_3       = 506   ; 
  const MAGIC_NUMBER_4       =   0.31; 
  const ARTICLE_INDENT_DEPTH = 12; 
  const BOLD_CHAR            = '§'    ;
  const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const BOLD_CHAR_REGEX      = new RegExp(`(${escapeRegExp(BOLD_CHAR)})`, 'g');
  const BOLD_BLOCK_REGEX     = new RegExp(`(${escapeRegExp(BOLD_CHAR)})(.*?)(${escapeRegExp(BOLD_CHAR)})`, 'g');

  doc.setFont('OldeEnglish', 'normal');
  doc.setFontSize(TITLE_FONT_SIZE);
  doc.text('Deed of Change of Name', A4_WIDTH / 2, 20, { align: 'center' });
  doc.line(70, 23, A4_WIDTH - 70, 23);
  doc.setFontSize(BODY_FONT_SIZE);

  function getDayOrdinal(num: number) {
    if(num === 1 || num === 21 || num === 31) return 'ST';
    if(num === 2 || num === 22) return 'ND';
    if(num === 3 || num === 23) return 'RD';
    return 'TH';
  }

  function getTextRows(inputValue: string, width: number) {
    const textWithoutBoldMarks = inputValue.replace(BOLD_CHAR_REGEX, '');

    let splitTextWithoutBoldMarks = doc.splitTextToSize(
      textWithoutBoldMarks,
      MAGIC_NUMBER_1
    ) as string[];

    let charsMapLength = 0;
    let position = 0;
    let positionOffsetForEOLBoldToggles = 0;
    let isBold = false;

    let textRows = splitTextWithoutBoldMarks.map((row, i) => {
        const charsMap = row.split('');

        let willToggleBoldAtEndOfLine = false;
        const chars = charsMap.map((char, j) => {
          position = charsMapLength + j + i + positionOffsetForEOLBoldToggles;

          let currentChar = inputValue.charAt(position);

          if (currentChar === BOLD_CHAR) {
            isBold = !isBold;
            currentChar = inputValue.charAt(position + 1);

            let removeMarks = inputValue.split('');
            removeMarks.splice(position, 1);
            inputValue = removeMarks.join('');
          }

          if(j === charsMap.length - 1 && inputValue.charAt(position + 1) === BOLD_CHAR) {
            willToggleBoldAtEndOfLine = true;
            positionOffsetForEOLBoldToggles += 1;
          }

          return { char: currentChar, bold: isBold };
        });
        if(willToggleBoldAtEndOfLine) isBold = !isBold;
        charsMapLength += charsMap.length;

        let charsWihoutsSpacing = chars.filter((val) => val.char != ' ');
        let widthRow = 0;

        charsWihoutsSpacing.forEach((val) => {
          doc.setFont(BODY_FONT, val.bold ? 'bold' : 'normal');
          widthRow += doc.getStringUnitWidth(val.char) * BODY_FONT_SIZE;
        });

        let totalBlankSpaces = charsMap.length - charsWihoutsSpacing.length;
        let blankSpacing = (width - widthRow) / totalBlankSpaces;

        return {blankSpacing: blankSpacing, chars: chars};
      });

      return textRows;
  }

  function addPara(unformattedText: string, startY: number, startX: number, width: number, htmlStart = '<p class="mb-4 text-lg">', htmlEnd = '</p>') {
    const text = unformattedText.
      replace(`${BOLD_CHAR}${BOLD_CHAR}`, '').
      replace(/[\n ]+/g, ' ').trim(); 

    const startXCached = startX;
    const lineSpacing = doc.getLineHeightFactor() + (BODY_FONT_SIZE * MAGIC_NUMBER_4);

    let textObject = getTextRows(text, width);

    textObject.map((row, rowPosition) => {
      row.chars.map((val) => {
        doc.setFont(BODY_FONT, val.bold ? 'bold' : 'normal');
        doc.text(val.char, startX, startY);

        if(val.char == ' ' && rowPosition < textObject.length - 1){
          startX += row.blankSpacing * MAGIC_NUMBER_2;
        } else {
          startX += doc.getStringUnitWidth(val.char) * (BODY_FONT_SIZE * MAGIC_NUMBER_2);
        }
      });
      startX = startXCached;
      startY += lineSpacing;
    });

    const htmlText = text.replace(BOLD_BLOCK_REGEX, `<strong>$2</strong>`);
    html += `${htmlStart}${htmlText}${htmlEnd}`;

    return startY + lineSpacing;
  };

  let pagePosition = 35;
  const countyLine = submission.county == '' ? '' : ` in the County of §${submission.county}§`
  pagePosition = addPara(`
    §BY THIS DEED OF CHANGE OF NAME§ made by myself the undersigned
    §${submission.newName}§ of §${submission.address}§${countyLine}
    formerly known as §${submission.oldName}§, a British Citizen
  `, pagePosition, MARGIN_LEFT_RIGHT, MAGIC_NUMBER_3);
  pagePosition = addPara(`
    §HEREBY DECLARE AS FOLLOWS:§
  `, pagePosition, MARGIN_LEFT_RIGHT, MAGIC_NUMBER_3);
  addPara(`
    §I. §
  `, pagePosition, MARGIN_LEFT_RIGHT, MAGIC_NUMBER_3, '<div class="mb-4 text-lg flex gap-4"><p>', '');
  pagePosition = addPara(`
    §I ABSOLUTELY§ and entirely renounce, relinquish and abandon the use of my said former name
    §${submission.oldName}§ and assume, adopt and determine to take and use from the date hereof the name of
    §${submission.newName}§ in substitution for my former name of §${submission.oldName}§
  `, pagePosition, MARGIN_LEFT_RIGHT + ARTICLE_INDENT_DEPTH, MAGIC_NUMBER_3 - (ARTICLE_INDENT_DEPTH * 3), '<span>', '</span></p></div>');
  
  addPara(`
    §II. §
  `, pagePosition, MARGIN_LEFT_RIGHT, MAGIC_NUMBER_3, '<div class="mb-4 text-lg flex gap-4"><p>', '');
  pagePosition = addPara(`
    §I SHALL AT ALL TIMES§ hereafter in all records, deeds documents and other writings and in all actions and
    proceedings as well as in all dealings and transactions and on all occasions whatsoever use and subscribe the
    said name of §${submission.newName}§ as my name, in substitution for my former name of
    §${submission.oldName}§ so relinquished as aforesaid to the intent that I may hereafter be called known or
    distinguished not by the former name of §${submission.oldName}§ but by the name §${submission.newName}§
  `, pagePosition, MARGIN_LEFT_RIGHT + ARTICLE_INDENT_DEPTH, MAGIC_NUMBER_3 - (ARTICLE_INDENT_DEPTH * 3), '<span>', '</span></p></div>');
  
  addPara(`
    §III. §
  `, pagePosition, MARGIN_LEFT_RIGHT, MAGIC_NUMBER_3, '<div class="mb-4 text-lg flex gap-4"><p>', '');
  pagePosition = addPara(`
    §I AUTHORISE AND REQUIRE§ all persons at all times to designate, describe and address me by the adopted
    name of  §${submission.newName}§
  `, pagePosition, MARGIN_LEFT_RIGHT + ARTICLE_INDENT_DEPTH, MAGIC_NUMBER_3 - (ARTICLE_INDENT_DEPTH * 3), '<span>', '</span></p></div>');
  
  pagePosition = addPara(`
    §IN WITNESS§ whereof I have hereunto subscribed my adopted and substituted name of
    §${submission.newName}§ and also my said former name of §${submission.oldName}§.
  `, pagePosition, MARGIN_LEFT_RIGHT, MAGIC_NUMBER_3);
  
  if(submission.firstNameChanged) {
    pagePosition = addPara('Notwithstanding the decision of Mr Justice Vaisey in re Parrott, Cox v Parrott, the applicant wishes the enrolment to proceed.', pagePosition, MARGIN_LEFT_RIGHT, MAGIC_NUMBER_3);
  }
  
  const date = Temporal.PlainDate.from(submission.date);
  const day = parseInt(date.toLocaleString('en-GB', { day: 'numeric' }));
  const dayOrdinal = getDayOrdinal(day);
  const month = date.toLocaleString('en-GB', { month: 'long' }).toUpperCase();
  const year = date.toLocaleString('en-GB', { year: 'numeric' });
  pagePosition = addPara(`§SIGNED AS A DEED THIS ${day}${dayOrdinal} DAY OF ${month} IN THE YEAR ${year}§`, pagePosition, MARGIN_LEFT_RIGHT, MAGIC_NUMBER_3);

  // Signatures
  pagePosition += 20;
  const line1Left = (MARGIN_LEFT_RIGHT * 1.5);
  const line1Right = (A4_WIDTH / 2) - (MARGIN_LEFT_RIGHT * 0.75);
  const line2Left = (A4_WIDTH / 2) + (MARGIN_LEFT_RIGHT * 0.75);
  const line2Right = (A4_WIDTH) - (MARGIN_LEFT_RIGHT * 1.5);
  const line1Center = (line1Left + line1Right) / 2;
  const line2Center = (line2Left + line2Right) / 2;
  doc.line(line1Left, pagePosition, line1Right, pagePosition);
  doc.line(line2Left, pagePosition, line2Right, pagePosition);

  html += `<div class="mt-12 space-y-8">`;
  html += `<p class="text-lg">By the above name <strong>${submission.newName}</strong>: ____________________</p>`;
  html += `<p class="text-lg">By the above name <strong>${submission.oldName}</strong>: ____________________</p>`;
  html += `<p class="text-lg mt-8">____________________<br>${submission.firstWitnessName}<br>${submission.firstWitnessAddress}</p>`;
  html += `<p class="text-lg mt-8">____________________<br>${submission.secondWitnessName}<br>${submission.secondWitnessAddress}</p>`;
  html += `</div>`;

  pagePosition += 5;
  doc.setFont(BODY_FONT, 'normal');
  doc.text(`by the above name`, line1Center, pagePosition, { maxWidth: line1Right - line1Left, align: 'center' });
  doc.text(`by the above name`, line2Center, pagePosition, { maxWidth: line2Right - line2Left, align: 'center' });
  pagePosition += 5;
  doc.setFont(BODY_FONT, 'bold');
  doc.text(submission.newName, line1Center, pagePosition, { maxWidth: line1Right - line1Left, align: 'center' });
  doc.text(submission.oldName, line2Center, pagePosition, { maxWidth: line2Right - line2Left, align: 'center' });

  pagePosition += 25;
  doc.line(line1Left, pagePosition, line1Right, pagePosition);
  doc.line(line2Left, pagePosition, line2Right, pagePosition);

  pagePosition += 5;
  doc.setFont(BODY_FONT, 'normal');
  doc.text(submission.firstWitnessName, line1Center, pagePosition, { maxWidth: line1Right - line1Left, align: 'center' });
  doc.text(submission.secondWitnessName, line2Center, pagePosition, { maxWidth: line2Right - line2Left, align: 'center' });
  pagePosition += 5;
  doc.text(submission.firstWitnessAddress, line1Center, pagePosition, { maxWidth: line1Right - line1Left, align: 'center' });
  doc.text(submission.secondWitnessAddress, line2Center, pagePosition, { maxWidth: line2Right - line2Left, align: 'center' });

  const pdfTooLong = (pagePosition >= 287);

  const title = (submission.newName && submission.newName.trim().length > 0 && submission.newName.trim().length < 32) ?
    `Deed Poll for ${submission.newName}` :
    'Your Deed Poll';

  // Add watermark if not paid
  if (!isPaid) {
    doc.saveGraphicsState();
    doc.setGState(new (doc.GState as any)({ opacity: 0.2 }));
    doc.setFont('times', 'bold');
    doc.setFontSize(100);
    doc.setTextColor(200, 0, 0);
    // Draw diagonal watermark at the center
    doc.text('PREVIEW', A4_WIDTH / 2, 160, { angle: 45, align: 'center' });
    doc.restoreGraphicsState();
  }

  // We return both the Blob and base64 data URI for reliable previewing and downloading
  const pdfDataUri = doc.output('datauristring');
  const pdfBlob = doc.output('blob');

  return {
    pdfDataUri,
    pdfBlob,
    htmlPreview: html,
    pdfTooLong,
    title
  };
}

export function downloadDeedPollPdf(sub: DeedPollSubmission, filename: string = 'deed-poll.pdf'): string {
  const { pdfBlob } = generateDeedPoll(sub, true);
  const blobUrl = URL.createObjectURL(pdfBlob);

  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // In-app mobile WebViews (Instagram, Facebook, Google App, iOS Chrome/WKWebView) often ignore
  // the `download` attribute on blob: URLs. Open the PDF directly as a fallback so the user can
  // still view, share, or save it from the native viewer.
  if (typeof navigator !== 'undefined' && /(CriOS|FxiOS|EdgiOS|GSA\/|FBAN|FBAV|Instagram|; wv\))/i.test(navigator.userAgent)) {
    window.open(blobUrl, '_blank');
  }

  setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
  return blobUrl;
}

export function printDeedPoll(htmlPreview: string, title: string, iframeEl?: HTMLIFrameElement | null) {
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile && iframeEl?.contentWindow) {
    try {
      iframeEl.contentWindow.focus();
      iframeEl.contentWindow.print();
      return;
    } catch {
      // Fall back to HTML print window below
    }
  }

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en-GB">
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <style>
          @page { size: A4; margin: 20mm 18mm; }
          body {
            font-family: "Times New Roman", Times, serif;
            color: #000;
            line-height: 1.65;
            font-size: 12pt;
            max-width: 175mm;
            margin: 0 auto;
            padding: 10mm 0;
            text-align: justify;
          }
          h2 {
            font-size: 22pt;
            text-align: center;
            text-decoration: underline;
            margin-bottom: 24pt;
          }
          p { margin: 0 0 14pt 0; }
          .flex { display: flex; gap: 12pt; margin-bottom: 14pt; }
          .mt-12 { margin-top: 28pt; }
          .mt-8 { margin-top: 20pt; }
          .space-y-8 > * + * { margin-top: 20pt; }
        </style>
      </head>
      <body>
        ${htmlPreview}
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 150);
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}
