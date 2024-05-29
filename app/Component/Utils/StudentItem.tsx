interface StudentItemProps {
    name: string;
    status: string;
    regNo: string;
    avatar?: string;
  }
  
  const StudentItem: React.FC<StudentItemProps> = ({ name, status, regNo, avatar }) => {
    return (
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-3">
          {avatar ? (
            <img src={avatar} alt={name} className="w-8 h-8 rounded-full" />
          ) : (
            <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full">
              <span className="text-sm text-gray-700">{name[0]}</span>
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900">{name} {status && <span className="text-blue-500">({status})</span>}</div>
            <div className="text-sm text-gray-500">{regNo}</div>
          </div>
        </div>
        <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
          <span className="text-gray-500">...</span>
        </button>
      </div>
    );
  };
export default   StudentItem