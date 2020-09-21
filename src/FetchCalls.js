
export const getAllPlanets = () => {
  return fetch(`http://swapi.dev/api/planets/?page=1`)
.then(res => {
  if(res.ok){
    return res.json()
  }
  })
}

export const getSecondSet = () => {
return fetch('http://swapi.dev/api/planets/?page=2')
.then(res => {
  if(res.ok) {
    return res.json()
    }
  })
}
