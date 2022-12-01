export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "candidate",
      headerName: "Candidate",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
 
    {
      field: "date",
      headerName: "Date",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithDate ${params.row.date}`}>
            {params.row.date}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Alishbah",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date:  "12/9/22",
      email: "1alishbah@gmail.com",

    },
    {
      id: 2,
      username: "Noman",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2noman@gmail.com",
      date:  "15/7/22",
    },
    {
      id: 3,
      username: "Sara",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3sara@gmail.com",
      date:  "2/4/22",
    },
    
  ];