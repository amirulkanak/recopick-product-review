import AddQueryForm from '../components/AddQueryForm';

const AddQueryPage = () => {
  document.title = 'Add Query | Recopick';
  window.scrollTo(0, 0);
  return (
    <div className="my-20">
      <AddQueryForm />
    </div>
  );
};

export default AddQueryPage;
