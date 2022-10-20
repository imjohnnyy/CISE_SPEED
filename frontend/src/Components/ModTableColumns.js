import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Button from '@mui/material/Button';

const ModTableColumns = [
  {
    Header: 'TITLE',
    accessor: 'title',
  },
  {
    Header: 'AUTHOR',
    accessor: 'author',
  },
  {
    Header: 'SOURCE',
    accessor: 'source',
  },
  {
    Header: 'PUBLISHED DATE',
    accessor: 'published_date',
  },
  {
    Header: 'DOI',
    accessor: 'doi',
  },
  {
    Header: 'CLAIM',
    accessor: 'claim',
  },
  {
    Header: 'EVIDENCE',
    accessor: 'evidence',
  },
  {
    Header: 'SE PRACTICE',
    accessor: 'se_practice',
  },
  {
    Header: 'RATING',
    accessor: 'rate'
  },
  {
    Header: 'STATUS',
    accessor: 'status'
  },
  {
    Header: 'Approve',
    accessor: 'approve',
    Cell: ({row}) => (
      <Button type="submit" onClick={()=> this.onStatusUpdate} variant="contained" size="small" endIcon={<ThumbUpOffAltIcon />}>Approve </Button>
      )
  }
];

export default ModTableColumns;
