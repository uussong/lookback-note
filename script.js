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
  renderMemoList()
}

function resetInput() {
  document.getElementById('title').value = ''
  document.getElementById('learn').value = ''
}

btnSubmit.addEventListener('click', addMemo)
btnSubmit.addEventListener('click', resetInput)

function renderMemoList() {
  const display = document.querySelector('.display')
  display.innerHTML = ''

  for (const memo of memoList) {
    const article = document.createElement('article')
    const item = document.createElement('div')
    const title = document.createElement('h2')
    const content = document.createElement('p')
    const date = document.createElement('p')
    const btnDelete = document.createElement('button')

    content.textContent = memo.learn
    btnDelete.textContent = '삭제'
    btnDelete.setAttribute('id', memo.len)
    btnDelete.setAttribute('onclick', 'removeMemo()')
    
    

    article.classList.add('display-list')
    item.classList.add('display-item')
    title.classList.add('display-title')
    title.textContent = memo.title
    date.textContent = memo.date
    
    content.textContent = memo.learn
    content.classList.add('word-break')
    date.classList.add('display-date')
    btnDelete.classList.add('display-delete')

    display.appendChild(article)
    article.appendChild(item)
    item.appendChild(title)
    item.appendChild(btnDelete)
    item.appendChild(content)
    item.appendChild(date)
  }
}

renderMemoList()

btnSubmit.addEventListener('click', addMemo)
btnSubmit.addEventListener('click', renderMemoList)

function removeMemo() {
  const idx = memoList.find(item => item.len == event.target.id)
  if (idx) {
    memoList.splice(memoList.findIndex((item) => item.len == idx.len), 1)
  }
  localStorage.setItem('memoList', JSON.stringify(memoList))
  renderMemoList()
}