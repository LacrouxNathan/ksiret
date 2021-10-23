export interface Etablissement {
    id: number;
    siret: string;
    nom_raison_sociale: string;
    libelle_activite_principale: string;
    date_creation: string;
    libelle_nature_juridique_entreprise: string;

    numero_voie: string;
    type_voie: string;
    libelle_voie: string;
    code_postal: string;
    libelle_commune: string;
    departement: string;
    lebelle_departement: string;
}