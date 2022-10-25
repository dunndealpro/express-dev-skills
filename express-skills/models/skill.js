const skills = [
    { id: 123456, skill: "Nunchuck", have: true },
    { id: 654321, skill: 'Bow Hunting', have: false },
    { id: 321321, skill: 'Computer Hacking', have: true }
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}