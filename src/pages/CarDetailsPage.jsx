import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectCarById, selectIsLoading } from "../../redux/cars/selectors";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCarById } from "../../redux/cars/operations";
import CarDetailsItem from "../../components/CarDetailsItem/CarDetailsItem";
import Loader from "../../components/Loader/Loader";
import Menu from "../../components/Menu/Menu";
const paths = ["features", "reviews"];

const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const car = useSelector(selectCarById);
  const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  return (
    <>
      <title>Details</title>

      <Container>
        {isLoading && <Loader />}
        {car && (
          <>
            <CarDetailsItem />
            <Menu paths={paths} /> <Outlet />
          </>
        )}
      </Container>
    </>
  );
};

export default CarDetailsPage;
