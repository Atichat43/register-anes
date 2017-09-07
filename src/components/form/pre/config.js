export const getConfig = (part) => ({
  'doctor': {
    title: 'Pre Planning by Doctor',
    head: ['Pre Operation Diagnosis', 'Operation Plan', 'Underlying', 'Special Treatment', 'Note']
  },
  'physicalInfo': {
    title: 'Physical Information',
    head: ['ASA Physical status', 'High alert condition', 'Allergy', 'Smoking', 'Alcohol']
  },
  'information': {
    title: 'Information',
    head: ['Previous Operation', 'Current drugs', 'Premedication']
  },
  'planning': {
    title: 'Blood components/ ICU',
    head: ['Blood/components prepared', 'Planned ICU']
  },
  'laboratory': {
    title: 'Laboratory',
    head: ['CBC', 'Blood chemistry', 'Coagulagram', 'LFT']
  },
  'investigation': {
    title: 'Investigation',
    head: ['others', 'CXR', 'ECG']
  },
  'discussion': {
    title: 'Discussion',
    head: ['Anesthetic Plan', 'discuss', 'consent']
  },
  'examination': {
    title: 'Examination',
    head: ['Physical examination', 'Airway assessment',
      'Cardiovascular', 'Respiratory', 'Neuro/Muscular',
      'Renal', 'Edocrine', 'Hermato', 'Gastrointestinal',
      'Psychological', 'Others']
  }
}[part] || '')
