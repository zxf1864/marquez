import * as actionTypes from '../constants/ActionTypes'

import { IDatasetAPI, IJobAPI, INamespaceAPI } from '../types/api'
import { IFilterByKey } from '../types'

export const fetchDatasetsSuccess = (datasets: IDatasetAPI[]) => ({
  type: actionTypes.FETCH_DATASETS_SUCCESS,
  payload: {
    datasets
  }
})

export const filterDatasets = (filterByKey: IFilterByKey, filterByValue?: string) => ({
  type: actionTypes.FILTER_DATASETS,
  payload: {
    filterByKey,
    filterByValue
  }
})

export const fetchJobsSuccess = (jobs: IJobAPI[]) => ({
  type: actionTypes.FETCH_JOBS_SUCCESS,
  payload: {
    jobs
  }
})

export const filterJobs = (filterByKey: IFilterByKey, filterByValue?: string) => ({
  type: actionTypes.FILTER_JOBS,
  payload: {
    filterByKey,
    filterByValue
  }
})

export const fetchNamespacesSuccess = (namespaces: INamespaceAPI[]) => ({
  type: actionTypes.FETCH_NAMESPACES_SUCCESS,
  payload: {
    namespaces
  }
})

export const findMatchingEntities = (search: string) => ({
  type: actionTypes.FIND_MATCHING_ENTITIES,
  payload: {
    search
  }
})

export const applicationError = (message: string) => ({
  type: actionTypes.APPLICATION_ERROR,
  payload: {
    message
  }
})

export const dialogToggle = (field: string) => ({
  type: actionTypes.DIALOG_TOGGLE,
  payload: {
    field
  }
})
