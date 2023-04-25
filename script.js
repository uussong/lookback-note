let memoList = JSON.parse(localStorage.getItem('memoList'))
memoList = memoList ?? []


const btnAdd = document.querySelector('.btn-add')
const btnSubmit = document.querySelector('.btn-submit')
const btnConfirm = document.querySelector('.btn-confirm')

const getToday = () => {
  const month = document.querySelector('.month')
  const day = document.querySelector('.day')
  let date = new Date()
  month.textContent =  date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  day.textContent = date.getDate()
}
getToday()

const addMemo = () => {
  const learn = document.getElementById('learn').value
  if (learn) {
    memoList.push({ learn })
  }
  localStorage.setItem('memoList', JSON.stringify(memoList))
}

const resetInput = () => {
  document.getElementById('learn').value = ""
}

btnConfirm.addEventListener('click', addMemo)
btnConfirm.addEventListener('click', resetInput)

btnAdd.addEventListener('click', () => {
  const inputArea = document.querySelector('.input-area')
  inputArea.classList.remove('hidden')
})
btnConfirm.addEventListener('click', () => {
  const inputArea = document.querySelector('.input-area')
  inputArea.classList.add('hidden')
})

const renderMemo = () => {
  const memoDisplay = document.querySelector('.memo-display')
  memoDisplay.innerHTML = ''
  for (const memo of memoList) {
    const item = document.createElement('div')
    const content = document.createElement('p')
    const btnDelete = document.createElement('button')
    content.textContent = memo.learn
    btnDelete.textContent = '삭제'
    item.appendChild(content)
    item.appendChild(btnDelete)
    item.classList.add('flex')
    content.classList.add('word-break')
    memoDisplay.appendChild(item)
  }
}

renderMemo()
btnConfirm.addEventListener('click', renderMemo)
// btnAdd.addEventListener('click', renderMemo)

const renderMemoList = () => {
  const display = document.querySelector('.display')
  const article = document.createElement('article')
  const item = document.createElement('div')
  const title = document.createElement('h2')
  display.appendChild(article)
  article.appendChild(item)
  item.appendChild(title)
  
  for (const memo of memoList) {
    const content = document.createElement('p')
    article.classList.add('display-list')
    item.classList.add('display-item')
    title.classList.add('display-title')
    title.textContent = '배운점'
    
    content.textContent = memo.learn
    content.classList.add('word-break')
    item.appendChild(content)
  }

}

renderMemoList()
btnSubmit.addEventListener('click', addMemo)
btnSubmit.addEventListener('click', renderMemoList)
