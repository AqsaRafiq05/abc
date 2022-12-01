export const userColumns = [
    { field: "id", headerName: "sr no", width: 70 },
    {
      field: "title",
      headerName: " Title",
      width: 230,
    
     
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
 
    {
      field: "inprogress",
      headerName: "In-progress",
      width: 160,
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
      title: "Quiz ",
      status: "Published",
      inprogress: 1,
      date:  "12/9/22",    

    },
];