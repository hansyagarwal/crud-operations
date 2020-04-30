window.onload = function(){
    document.querySelector('#create').addEventListener('submit',()=>{
        alert('User Created!');
    })
    
    document.querySelector('#read').addEventListener('submit',(e)=>{
        alert('Terminal!');
    })
    
    const update = document.querySelector('#update-1')
    
    document.getElementById('update').addEventListener('submit',(e)=>{
        e.preventDefault()
        alert('Password Updated!')
        console.log('Password Updated')
    })
    
    document.querySelector('#delete').addEventListener('submit',(e)=>{
        console.log('User Deleted!')
        alert('User Deleted!');
    })
}