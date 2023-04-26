let memoList = JSON.parse(localStorage.getItem('memoList'))
memoList = memoList ?? []

const btnSubmit = document.querySelector('.btn-submit')

const month = document.querySelector('.month')
const day = document.querySelector('.day')
let date = new Date()
today = {
  month: date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
  day: date.getDate(),
}
month.textContent = today.month
day.textContent = today.day


function addMemo() {
  const title = document.getElementById('title').value
  const learn = document.getElementById('learn').value
  if (learn) {
    memoList.push({ title, learn, date: `${today.month}-${today.day}`, len: memoList.length})
  }
  localStorage.setItem('memoList', JSON.stringify(memoList))
  renderMemo()
}

function resetInput() {
  document.getElementById('title').value = ''
  document.getElementById('learn').value = ''
}

btnSubmit.addEventListener('click', addMemo)
btnSubmit.addEventListener('click', resetInput)




function renderMemo() {
  const memoDisplay = document.querySelector('.memo-display')
  memoDisplay.innerHTML = ''
  
  for (const memo of memoList) {
    const item = document.createElement('div')
    const content = document.createElement('p')
    const btnDelete = document.createElement('button')

    content.textContent = memo.learn
    btnDelete.textContent = '삭제'
    btnDelete.setAttribute('id', memo.len)
    console.log(btnDelete)
    // btnDelete.setAttribute('onclick', removeMemo())

    item.appendChild(title)
    item.appendChild(content)
    item.appendChild(btnDelete)
    item.classList.add('flex')
    content.classList.add('word-break')
    memoDisplay.appendChild(item)
  }
}

btnSubmit.addEventListener('click', renderMemo)

function renderMemoList() {
  const memoDisplay = document.querySelector('.memo-display')
  memoDisplay.innerHTML = ''
  const display = document.querySelector('.display')
  

  for (const memo of memoList) {
    const article = document.createElement('article')
    const item = document.createElement('div')
    const title = document.createElement('h2')
    const content = document.createElement('p')
    const date = document.createElement('p')
    display.appendChild(article)
    article.appendChild(item)
    item.appendChild(title)
    article.classList.add('display-list')
    item.classList.add('display-item')
    title.classList.add('display-title')
    title.textContent = memo.title
    date.textContent = memo.date
    
    content.textContent = memo.learn
    content.classList.add('word-break')
    date.classList.add('display-date')
    item.appendChild(content)
    item.appendChild(date)
  }

}

renderMemoList()

btnSubmit.addEventListener('click', addMemo)
btnSubmit.addEventListener('click', renderMemoList)

