let memoList = JSON.parse(localStorage.getItem('memoList'))
memoList = memoList ?? []


const add = document.querySelector('.btn-add')
const memoInput = document.querySelector('.memo-input')
const submit = document.querySelector('btn-submit')

const addMemo = () => {
  const learn = document.getElementById('learn').value
  memoList.push({ learn })
  localStorage.setItem('memoList', JSON.stringify(memoList))
}
add.addEventListener('click', addMemo)
// add.addEventListener('click', () => {
//   memoInput.classList.remove('hidden')

//   if (!memoInput.classList.contains('hidden')) {
    
//   }
// })


const renderMemo = () => {
  const display = document.querySelector('.display')
  const article = document.createElement('article')
  const div = document.createElement('div')
  const title = document.createElement('h2')
  display.appendChild(article)
  article.appendChild(div)
  div.appendChild(title)
  
  for (const item of memoList) {
    const content = document.createElement('p')
    article.classList.add('display-list')
    div.classList.add('display-item')
    title.classList.add('display-title')
    title.textContent = '배운점'
    
    content.textContent = item.learn
    
    div.appendChild(content)
    console.log(item)
  }

}

renderMemo()
submit.addEventListener('click', addMemo)
submit.addEventListener('click', renderMemo)
