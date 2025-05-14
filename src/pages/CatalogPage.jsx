import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCars } from "../../redux/cars/operations";
import {
  selectPage,
  selectLimit,
  selectIsLoading,
  selectIsError,
  selectHasNextPage,
} from "../../redux/cars/selectors";

import {
  selectBrand,
  selectPrice,
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/filters/selectors";

import { resetPage, incrementPage } from "../../redux/cars/slice";
import { getFilters } from "../../helpers/filters";

import Container from "../../components/Container/Container";
import PageContainer from "../../components/PageContainer/PageContainer";
import Filters from "../../components/Filters/Filters";
import CarsList from "../../components/CarsList/CarsList";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const hasNextPage = useSelector(selectHasNextPage);

  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  useEffect(() => {
    dispatch(resetPage());
    const filters = getFilters({
      page: 1,
      limit,
      brand,
      price,
      mileageFrom,
      mileageTo,
    });
    dispatch(getAllCars(filters));
  }, [dispatch, limit, brand, price, mileageFrom, mileageTo]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(incrementPage());
    const filters = getFilters({
      page: nextPage,
      limit,
      brand,
      price,
      mileageFrom,
      mileageTo,
    });
    dispatch(getAllCars(filters));
  };

  return (
    <>
      <title>Catalog</title>
      <Container>
        <PageContainer>
          <Filters />

          {isError && (
            <p style={{ color: "red" }}>
              Something went wrong. Please try again.
            </p>
          )}

          <CarsList />

          {hasNextPage && !isLoading && (
            <button onClick={handleLoadMore}>Load More</button>
          )}

          {isLoading && <p>Loading...</p>}
        </PageContainer>
      </Container>
    </>
  );
};

export default CatalogPage;
