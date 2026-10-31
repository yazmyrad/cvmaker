export default function Introduction(){
    return (
        <div>
            <h2>Introduction</h2>
        <input 
            type='text'
            placeholder='Tell about yourself'
            min={10}
            max={500}
        />
        </div>
    )
}