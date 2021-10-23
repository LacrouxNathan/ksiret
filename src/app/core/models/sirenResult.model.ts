import { Etablissement } from "./etablissement.model";

export interface SirenResult {
    total_results: number,
    total_pages: number

    etablissement: Etablissement[];
}