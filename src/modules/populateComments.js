const populateComments = (ArrayObj) => {
  const cont = document.querySelector('.comments-container');
  const array = ArrayObj;
  if (ArrayObj) {
    array.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'comments-row';
      div.innerText = `${item.creation_date} \b ${item.username}: ${item.comment}`;
      cont.appendChild(div);
    });
  }
};

export default populateComments;
