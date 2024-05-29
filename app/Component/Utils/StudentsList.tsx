import StudentItem from './StudentItem';


const students = [
  { name: 'Brooklyn Simmons', status: 'You', regNo: 'Trivago', avatar: 'https://via.placeholder.com/32' },
  { name: 'Bessie Cooper', status: '', regNo: 'Trivago', avatar: 'https://via.placeholder.com/32' },
  { name: 'Jacob Jones', status: '', regNo: 'Trivago' },
  { name: 'Marvin McKinney', status: '', regNo: 'Connectis' },
  { name: 'Ralph Edwards', status: '', regNo: 'Connectis' },
  { name: 'Courtney Henry', status: '', regNo: 'Connectis' },
  { name: 'Kristin Stanton', status: '', regNo: 'Connectis', avatar: 'https://via.placeholder.com/32' },
  { name: 'Devon Lane', status: '', regNo: 'Connectis' }
];

const invited = [
  { name: 'Derek Scott', status: '', regNo: 'Trivago', avatar: 'https://via.placeholder.com/32' },
  { name: 'Spencer Casper', status: '', regNo: 'Trivago', avatar: 'https://via.placeholder.com/32' }
];

export default () => {
  return (
    <div>
      <div className="mt-4">
        <div className="text-gray-500 text-sm font-bold">Students attending</div>
        {students.map((participant, index) => (
          <StudentItem key={index} {...participant} />
        ))}
      </div>
      
    </div>
  );
};