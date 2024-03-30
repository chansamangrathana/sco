'use client'
import DataTable from 'react-data-table-component';


export default function Dashboard() {
  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
  ];
  
  const data = [
      {
      id: 1,
      title: 'Joung Hoseok',
      year: '1988',
    },
    {
      id: 2,
      title: 'Park Jimin',
      year: '1995',
    },
    {
      id: 3,
      title: 'Kim Namjoon',
      year: '1984',
    },
    {
      id: 4,
      title: 'Min yoongi',
      year: '1984',
    },
    {
      id: 5,
      title: 'Joen Jungkook',
      year: '1984',
    },
    {
      id: 6,
      title: 'Kim seokjin',
      year: '1984',
    },
    {
      id: 7,
      title: 'Kim Teayoung',
      year: '1984',
    },

  ]
  
  return (
    <main className="h-screen" >
      <DataTable
			columns={columns}
			data={data}
		/>
    </main>
  )
}
