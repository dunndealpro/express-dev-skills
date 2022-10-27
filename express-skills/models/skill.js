const skills = [
    { id: 123456, skill: "Nunchuck", have: true },
    { id: 654321, skill: 'Bow Hunting', have: false },
    { id: 321321, skill: 'Computer Hacking', have: true }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false;
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function updateOne(skill) {
    const id = parseInt(skill.id)
    const foundSkill = skills.find((skill) => skill.id === id)
    foundSkill.skill = skill.skill
    foundSkill.have = skill.have !== 'false'
}