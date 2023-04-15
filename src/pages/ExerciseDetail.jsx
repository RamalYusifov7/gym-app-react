import { Detail, SimiliarExercises, ExerciseVideos } from "../components/index";
import { useParams } from "react-router-dom";
import {
  useExerciseDetail,
  useExerciseVideos,
  useTargetMuscles,
} from "../hooks/useExercise";
function ExerciseDetail() {
  const { id } = useParams();
  const { isLoading, data: exerciseDetail } = useExerciseDetail(id);
  const {
    isLoading: isVdLoading,
    error: vdError,
    data: exerciseVideos,
  } = useExerciseVideos(exerciseDetail);
  const {
    isLoading: isTrgLoading,
    error: trgError,
    data: targets,
  } = useTargetMuscles(exerciseDetail);
  return (
    <>
      <Detail exerciseDetail={exerciseDetail} isLoading={isLoading} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        isVdLoading={isVdLoading}
        name={exerciseDetail?.name}
        vdError={vdError}
      />
      <SimiliarExercises
        isTrgLoading={isTrgLoading}
        targets={targets}
        trgError={trgError}
      />
    </>
  );
}

export default ExerciseDetail;
