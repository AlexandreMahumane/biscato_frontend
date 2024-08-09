
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


export const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Hart Hagerty',
      job: 'Daniel Guambe',
      profession: 'Desktop Support Technician',
      location: 'Purple'
    },
    {
      id: 2,
      name: 'Brice Swyre',
      job: 'Carol',
      profession: 'Seralheira',
      location: 'Red'
    },
    {
      id: 3,
      name: 'Carlos Bastos',
      job: 'Vasco Guane',
      profession: 'Office Assistant I',
      location: 'Crimson'
    },
    {
      id: 4,
      name: 'Yancy Tear',
      job: 'Carlos Cunha',
      profession: 'Pintor',
      location: 'xipanine'
    }
  ]);

  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [selectedComments, setSelectedComments] = useState(new Set());
  const [comments, setComments] = useState([
    {
      userId: 1,
      userName: 'Hart Hagerty',
      comment: 'Ótimo trabalho em equipe!',
      dateTime: '2024-08-08 14:30',
      serviceType: 'Feedback'
    },
    {
      userId: 2,
      userName: 'Brice Swyre',
      comment: 'Precisa melhorar a comunicação.',
      dateTime: '2024-08-07 09:15',
      serviceType: 'Crítica'
    },
    {
      userId: 3,
      userName: 'Carlos Bastos',
      comment: 'Excelente desempenho no projeto.',
      dateTime: '2024-08-06 16:45',
      serviceType: 'Elogio'
    },
    {
      userId: 4,
      userName: 'Yancy Tear',
      comment: 'Foi um prazer trabalhar com você.',
      dateTime: '2024-08-05 11:00',
      serviceType: 'Feedback'
    }
  ]);

  const handleSelectAllUsers = (event) => {
    if (event.target.checked) {
      setSelectedUsers(new Set(users.map(user => user.id)));
    } else {
      setSelectedUsers(new Set());
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(userId)) {
        newSelection.delete(userId);
      } else {
        newSelection.add(userId);
      }
      return newSelection;
    });
  };

  const handleDeleteSelectedUsers = () => {
    setUsers(users.filter(user => !selectedUsers.has(user.id)));
    setSelectedUsers(new Set()); // Clear selection after deleting
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSelectAllComments = (event) => {
    if (event.target.checked) {
      setSelectedComments(new Set(comments.map((_, index) => index)));
    } else {
      setSelectedComments(new Set());
    }
  };

  const handleSelectComment = (index) => {
    setSelectedComments(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(index)) {
        newSelection.delete(index);
      } else {
        newSelection.add(index);
      }
      return newSelection;
    });
  };

  const handleDeleteSelectedComments = () => {
    setComments(comments.filter((_, index) => !selectedComments.has(index)));
    setSelectedComments(new Set()); // Clear selection after deleting
  };

  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (

    <div className="p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de Trabalhadores Freelancer</h1>

      <div className="mb-4">
        <button
          className="btn btn-primary"
          onClick={handleDeleteSelectedUsers}
          disabled={selectedUsers.size === 0}
        >
          Excluir Selecionados
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Cabeçalho */}
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={handleSelectAllUsers}
                    checked={selectedUsers.size === users.length}
                  />
                </label>
              </th>
              <th>Nome</th>
              <th>Trabalho</th>
              <th>Profissão</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (

              <tr key={user.id} className="hover:bg-blue-700">

                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedUsers.has(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-12 w-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.job}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.job}
                  <br />
                  <span className="badge badge-ghost badge-sm">{user.profession}</span>
                </td>
                <td>{user.location}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs text-red-500 hover:bg-red-100"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>

         

          <tfoot>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Trabalho</th>
              <th>Localização</th>

              <th></th>

            </tr>
          </tfoot>
        </table>
      </div>


      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Comentários das Pessoas que Requisitaram os Serviços</h2>

        <div className="mb-4">
          <button
            className="btn btn-primary"
            onClick={handleDeleteSelectedComments}
            disabled={selectedComments.size === 0}
          >
            Excluir Comentários Selecionados
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center mb-4">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                onChange={handleSelectAllComments}
                checked={selectedComments.size === comments.length}
              />
            </label>
            <span className="ml-2">Selecionar Todos</span>
          </div>
          {comments.map((comment, index) => (

            <div key={index} className="p-4 border border-gray-300 rounded-md bg-blue-700 hover:bg-blue-800">

              <div className="flex items-center gap-2 mb-2">
                <div className="flex-shrink-0 h-8 w-8 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-bold">{comment.userName}</div>

                  <div className="text-sm text-gray-200">Data e Hora: {comment.dateTime}</div>
                  <div className="text-sm text-gray-200">Tipo de Serviço: {comment.serviceType}</div>

                </div>
              </div>
              <p>{comment.comment}</p>
              <button
                className="btn btn-ghost btn-xs text-red-500 hover:bg-red-100 mt-2"
                onClick={() => handleDeleteComment(index)}
              >
                Excluir Comentário
              </button>
              <label className="ml-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedComments.has(index)}
                  onChange={() => handleSelectComment(index)}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);
