psql -U postgres

create database pfe;

 \c pfe

 create table temps(
     jour int not null,
     mois int not null,
     annee int not null,
     primary key (jour, mois, annee)
 );

 create table section(
     codeS varchar (10) primary key null,
     codeSpec varchar(10) not null,
     codeForm varchar(10) not null
 );

 create table affectation(
     jour int not null,
     mois int not null,
     annee int not null,
     codeEns varchar(20) not null,
     codeM varchar(20) not null,
     gradeEns varchar (10) not null,
     avencement int,
     salle varchar(10),
     primary key (jour, mois, annee, codeEns, codeM),
     foreign key (jour, mois, annee)
       references temps(jour, mois, annee)
 );

 create table enseignement(
     jour int not null,
     mois int not null,
     annee int not null,
     codeS varchar (10) not null,
     codeEns varchar(20) not null,
     codeM varchar(20) not null,
     nbrEnsGrad int,
     etatAvcModSec int,

     foreign key (codeS)
         references section (codeS),

     foreign key (codeEns, codeM, jour, mois, annee)
         references affectation (codeEns, codeM, jour, mois, annee)
 );

    --insertion
    insert into affectation values('01','01','2020','01','bdd','MA','40','s01');

   --requetes
   select gradeEns, count(*) from affectation group by gradeEns;
   select avencement, codem from affectation;    --add where section='...' change affectation ajouter section 


 create table moyenneS(
     matEtd int (12) not null,
     codeSmstr varchar (10) not null,
     moyenneS float not null,
     obsS varchar (20) not null,
     primary key (matEtd, codeSmstr),
 );

  create table moyenneM(
     matEtd int (12) not null,
     codeM varchar(20) not null,
     moyenneM float not null,
     obsM varchar (20) not null,
     primary key (matEtd, codeM),
 );

  create table moyenneAnn(
     matEtd int (12) not null,
     codeAnn varchar(20) not null,
     moyenneAnn float not null,
     obsAnn varchar (20) not null,
     primary key (matEtd, codeAnn),
 );

create table etudiant(
     jour int not null,
     mois int not null,
     annee int not null,
     matEtd int (12) not null,
     codeSmstr varchar (10) not null,
     codeS varchar (10) not null,
     codeM varchar(20) not null,
     codeAnn varchar(20) not null,

     tauxReuSpec int,
     nbrEtuSpec int,
     evlNbrEtuSpec int,
     nbrEtuObs int,




     foreign key (jour, mois, annee)
         references temps (jour, mois, annee),

     foreign key (matEtd, codeSmstr)
         references moyenneS (matEtd, codeSmstr),
     
     foreign key (codeS)
         references section (codeS),
    
     foreign key (codeM)
         references moyenneM (codeM),

     foreign key (codeAnn)
         references moyenneAnn (codeAnn),
);








