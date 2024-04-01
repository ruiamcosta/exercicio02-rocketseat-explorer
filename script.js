const students = [
  {
    name: 'Manuel Costa',
    grade1: 10,
    grade2: 10,
  },
  {
    name: 'Maria Pires',
    grade1: 5,
    grade2: 4,
  },
  {
    name: 'Glória Pereira',
    grade1: 10,
    grade2: 8,
  },
  {
    name: 'Rui Sousa',
    grade1: 5,
    grade2: 7,
  }
]

function averageGrade(grade1, grade2) {
  return (grade1 + grade2) / 2 
}

for (const student of students) {
  if(averageGrade(student.grade1, student.grade2) >= 7) {
    alert(`O aluno ${student.name} entrou no concurso.`)
  } else {
    alert(`O aluno ${student.name} não entrou no concurso.`)
  }
}
