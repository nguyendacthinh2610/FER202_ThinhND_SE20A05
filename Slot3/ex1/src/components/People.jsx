//Tạo 1 list of object Person gồm 3 phần tử id, name, age.
//Hiển thị danh sách người dùng trong component People.jsx ra dạng danh sách
// có đánh số thứ tự, tên và tuổi của người dùng đó.
function People() {
    const people = [
        {id: 1, name: 'Dustin', age: 30},
        {id: 2, name: 'Nguyen', age: 25},
        {id: 3, name: 'Thinh', age: 35},
        {id: 4, name: 'John', age: 40},
        {id: 5, name: 'Jane', age: 28},
        {id: 6, name: 'Alice', age: 22},
        {id: 7, name: 'Bob', age: 27},
        {id: 8, name: 'Charlie', age: 32},
        {id: 9, name: 'David', age: 29},
        {id: 10, name: 'Eve', age: 15}

    ];
    const firstTeenager = people.find(person => person.age >= 10 && person.age <= 16);
    return (
        <div>
            <h1>People List</h1>
            <ul>
                {people.map((person, index) => (
                    <li key={person.id}>
                        {index + 1}. {person.name}, Age: {person.age}
                    </li>
                ))}
                
            </ul>
            <h2>First Teenager:</h2>
            {firstTeenager ? (
                <p>{firstTeenager.name}, Age: {firstTeenager.age}</p>
            ) : (
                <p>No teenager found.</p>
            )}
        </div>
    );
}

export default People;