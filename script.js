let memoList = []
const add = document.querySelector('.add')


const addMemo = () => {
  const learn = document.getElementById('learn').value
  memoList.push({ learn })
  localStorage.setItem('memoList', JSON.stringify(memoList))
}
add.addEventListener('click', addMemo)

const renderMemo = () => {}