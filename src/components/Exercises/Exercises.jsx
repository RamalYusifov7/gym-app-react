import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Pagination,
} from "@mui/material";
import { useGlobalContext } from "../../context/GlobalContext";
import { ExerciseCard, Loading } from "../index";
import { usePaginate } from "../../hooks/usePaginate";

function Exercises() {
  const { searchedExs, isExLoading, exError } = useGlobalContext();
  const { numOfPages, currentPage, paginate, currentExercises } = usePaginate({
    data: searchedExs,
    perPage: 10,
  });

  if (isExLoading) {
    return <Loading />;
  }
  if (exError) {
    return <div className="error">Error</div>
  }

  if (!searchedExs?.length) {
    return <Box sx={{ textAlign: "center", fontSize: "20px" }}>No exercise found</Box>
  }

  return (
    <Box
      component="section"
      id="exercises"
      sx={{ padding: { xs: "24px 0 24px", lg: "48px 0 48px" } }}
    >
      <Container>
        <Typography variant="h4" mb="24px">Exercises</Typography>
        <Grid container spacing={2}>
          {currentExercises?.map((exercise, index) => {
            return (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <ExerciseCard {...exercise} />
              </Grid>
            );
          })}
        </Grid>
        <Stack spacing={2} justifyContent="center" mt="32px">
          <Pagination
            count={numOfPages ? numOfPages : undefined}
            defaultPage={1}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={paginate}
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default Exercises;
