import { useQuery } from "react-query";
import { globalApi } from "../api/globalAxios";
import { youtubeApi } from "../api/youtubeApi";


export function useExerciseDetail(id) {
    return useQuery('exerciseDetail', () =>
      globalApi(`/exercises/exercise/${id}`).then((res) => res.data)
    );
  }
  
export function useExerciseVideos(exerciseDetail) {
    return useQuery('exerciseVidoes', () =>
        youtubeApi(`/search?query=${exerciseDetail?.name}`).then((res) => res.data), {
        enabled: exerciseDetail?.name.length > 0
    }
    );
}

export function useTargetMuscles(exerciseDetail){
    return useQuery('targets', () =>
    globalApi(`exercises/target/${exerciseDetail.target}`).then((res) => res.data), {
    enabled: exerciseDetail?.target.length > 0
  }
  );
}