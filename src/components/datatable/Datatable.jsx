import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import VerifyOtpDialog from '../dialogs/VerifyOtpDialog';
import axios from '../../utils/axiosConfig';

const Datatable = ({
  title,
  btn,
  dialogComponent: DialogComponent,
  columns,
  endpoint,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [open, setOpen] = useState(false);
  const [verifyOtpOpen, setVerifyOtpOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleVerifyOtpOpen = () => {
    setVerifyOtpOpen(true);
  };

  const handleVerifyOtpClose = () => {
    setVerifyOtpOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link
              to={`/${title.toLowerCase()}/view`}
              style={{ textDecoration: 'none' }}
            >
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        <Button variant='outlined' onClick={handleClickOpen}>
          {btn}
        </Button>
        {DialogComponent && (
          <DialogComponent open={open} handleClose={handleClose} />
        )}

        <Typography>{title}</Typography>

        <Button variant='outlined' onClick={handleVerifyOtpOpen}>
          Verify OTP
        </Button>
        <VerifyOtpDialog
          open={verifyOtpOpen}
          handleClose={handleVerifyOtpClose}
        />
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        getRowId={data.id}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
