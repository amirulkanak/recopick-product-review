import AddQueryForm from '../components/AddQueryForm';

const AddQueryPage = () => {
  document.title = 'Add Query | Recopick';
  return (
    <div className="my-20">
      <AddQueryForm />
    </div>
  );
};

export default AddQueryPage;
