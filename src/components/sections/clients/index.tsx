
interface Client {
  name: string;
  email: string;
  phone: string;
  status: string;
}

const Clients = ({clients} : {clients: Client[]}) => {
  return (
    <ul className="space-y-2">
      {clients.map((client, i) => (
        <li key={i} className="border rounded p-3 shadow">
          <strong>{client.name}</strong><br />
          <span>{client.email}</span><br />
          <span>{client.phone}</span><br />
          <span className={client.status === 'Active' ? 'text-green-600' : 'text-red-600'}>
            {client.status}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Clients