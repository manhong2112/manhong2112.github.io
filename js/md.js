$(document).ready(() => {
   const overlay = $('.sidebar-overlay')
   const sidebar = $('#sidebar')
   const t = $('.MD-burger-layer')
   $('#sidebar-toggle').on('click', () => {
      sidebar.toggleClass('open')
      overlay.toggleClass('active')
      if (sidebar.hasClass('open')) {
         t.removeClass('MD-burger-line')
         t.addClass('MD-burger-arrow')
      } else {
         t.addClass('MD-burger-line')
         t.removeClass('MD-burger-arrow')
      }
   })

   overlay.on('click', () => {
      sidebar.toggleClass('open')
      overlay.toggleClass('active')
      t.removeClass('MD-burger-arrow')
      t.addClass('MD-burger-line')
   })
})
