const formRef = document.getElementById('studentForm')
const tableRef = document.getElementById('studentsTable').querySelector('tbody')

formRef.addEventListener('submit', onsubmit)

function onSubmit(event) {
    event.preventDefault();

    const form =event.currentTarget
    const student = {
        id: Date.now
        firstName:
        lastName:
        age:
        course:
        facualty:
    }
}
event.reset()