const menuHTML = `
<div data-menu-panel class="hidden fixed inset-0 z-50 flex flex-col justify-between bg-white p-4">
  <div class="flex flex-col gap-y-8">
    <div class="flex flex-row justify-between items-center">
      <h2 class="font-bold">منو</h2>
      <button data-menu-close>✕</button>
    </div>
    <div class="flex flex-col gap-y-8">
      <a href="#" class="flex flex-row justify-between items-center">
        <span>محصولات</span>
        <img src="/assets/icons/arrow-left.svg" alt="" />
      </a>
      <a href="#" class="flex flex-row justify-between items-center">
        <span>ترندها</span>
        <img src="/assets/icons/arrow-left.svg" alt="" />
      </a>
      <a href="#" class="flex flex-row justify-between items-center">
        <span>مقالات</span>
        <img src="/assets/icons/arrow-left.svg" alt="" />
      </a>
      <a href="#" class="flex flex-row justify-between items-center">
        <span>تماس باما</span>
        <img src="/assets/icons/arrow-left.svg" alt="" />
      </a>
      <a href="#" class="flex flex-row justify-between items-center">
        <span>حساب کاربری</span>
        <img src="/assets/icons/arrow-left.svg" alt="" />
      </a>
      <a href="#" class="flex flex-row justify-between items-center">
        <span>سبد خرید</span>
        <img src="/assets/icons/arrow-left.svg" alt="" />
      </a>
    </div>
  </div>
</div>`

document.body.insertAdjacentHTML('afterbegin', menuHTML)

const openBtn = document.querySelector('[data-menu-open]')
const panel = document.querySelector('[data-menu-panel]')
const closeBtn = document.querySelector('[data-menu-close]')

if (openBtn && panel) {
  openBtn.addEventListener('click', () => {
    panel.classList.toggle('hidden')
  })
}

if (closeBtn && panel) {
  closeBtn.addEventListener('click', () => {
    panel.classList.add('hidden')
  })
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && panel && !panel.classList.contains('hidden')) {
    panel.classList.add('hidden')
  }
})
