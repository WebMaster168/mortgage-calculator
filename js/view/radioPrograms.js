function init(getData){
    // console.log(getData())
    const radioBtns = document.querySelectorAll('input[name="program"]')
    const {base, it, gov, zero} = getData().programs  

    document.querySelector('#base-value').value = base
    document.querySelector('#it-value').value = it
    document.querySelector('#gov-value').value = gov
    document.querySelector('#zero-value').value = zero

    document.querySelector('#base-text').innerText = base * 100 + '%'
    document.querySelector('#it-text').innerText = it * 100 + '%'
    document.querySelector('#gov-text').innerText = gov * 100 + '%'
    document.querySelector('#zero-text').innerText = zero * 100 + '%'

    radioBtns.forEach(function(radioBtn){
        radioBtn.addEventListener('change', function(){
            this.dispatchEvent(new CustomEvent('updateForm', {
                bubbles: true,
                detail: {
                    selectedProgram: parseFloat(this.value),
                    onUpdate: 'radioProgram',
                    id: this.id
                }
            }))
        })
    })
}

export default init