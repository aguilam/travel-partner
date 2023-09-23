import '../../app/page.css'
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3001');
  const dataset = await response.json();
  const tickets = Object.values(dataset.data);
  return {
    props: {
      tickets: tickets,
    },
  };
}

export default function Page({ tickets }) {
  console.log(tickets);
  return (
    <div className='Feature__containers'>
      {tickets.map((ticket, index) => {
        return (
          <div key={index} className='Feature__info_containers'>
            <p className='Feature__descriptions'>{ticket.origin}</p>
            <p className='Feature__descriptions'>{ticket.destination}</p>
            <p className='Feature__descriptions'>{ticket.airline}</p>
            <p className='Feature__descriptions'>{ticket.departure_at}</p>
            <p className='Feature__descriptions'>{ticket.return_at}</p>
            <p className='Feature__descriptions'>{ticket.expires_at}</p>
            <p className='Feature__descriptions'>{ticket.price}</p>
            <p className='Feature__descriptions'>{ticket.flight_number}</p>
            <p className='Feature__descriptions'>{ticket.transfers}</p>
          </div>
        );
      })}
    </div>
  );
}
