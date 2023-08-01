function getListStudentIds(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  const ids = data.map((student) => student.id);
  return ids;
}

export default getListStudentIds;
