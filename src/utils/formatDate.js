// /* Arquivo para formatar a data */

// const formatDate = date => {
//     const formattedDate = new Date();
  
//     if (isNaN(formattedDate)) {
//       return 'Data inválida';
//     }
  
//     return formattedDate.toLocaleDateString('pt-BR', {
//       year: '2-digit',
//       month: 'short',
//       day: '2-digit',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };
  
//   export default formatDate;




  // const formatDate = date => {
  //   const formattedDate = new Date();
  
  //   if (isNaN(formattedDate)) {
  //     return 'Data inválida';
  //   }
  
  //   const day = formattedDate.getDate().toString().padStart(2, '0');
  //   const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
  //   const year = formattedDate.getFullYear().toString().slice(-2);
  //   const hour = formattedDate.getHours().toString().padStart(2, '0');
  //   const minute = formattedDate.getMinutes().toString().padStart(2, '0');
  
  //   return `${day}/${month}/${year} ${hour}:${minute}`;
  // };
  
  // export default formatDate;



  const formatDate = date => {
    return new Date(date).toLocaleDateString('pt-BR', {
        year: '2-digit',
        month: 'short',
        day: '2-digit'
    }) + ' ' + new Date(date).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
};

export default formatDate;


