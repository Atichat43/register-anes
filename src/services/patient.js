import firebase from 'firebase'

const get = (hn) => {
  return firebase.database().ref(`patients/${hn}`)
    .once('value')
    .then((snapshot) => {
      return snapshot.val()
    })
}

const list = (callback) => {
  firebase.database().ref('patients')
    .on('value', (snapshots) => {
      const result = []
      snapshots.forEach((snapshot) => {
        const patient = snapshot.val()
        patient.hn = snapshot.key
        result.push(patient)
      })
      callback(result)
    })
}

export default {
  get,
  list
}
