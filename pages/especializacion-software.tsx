import SpecializationForm from "../app/components/specialization_form/SpecializationForm"
import styles from "../app/styles/pages/software-specialization.module.scss"

const SoftwareSpecialization = () => (
  <main className={styles.container}>
    <h1>Descubre la especializacion de software mas afin a ti </h1>
    <SpecializationForm
      questions={[
        ["¿Qué disfrutas hacer en tu tiempo libre? ", "Ejemplo: Ver peliculas, hacer ejercicio"],
        ["¿Qué habilidades tienes?", "Ejemplo: Organizacion, comunicacion"],
        ["¿Prefieres trabajar individualmente o en equipo?", "Individualmente / en equipo"],
        ["¿Qué no te gusta a nivel laboral?", "Ejemplo: los jefes intensos, tareas repetitivas"],
        [
          "Piensa en una tarea que disfrutaste realizar. ¿Por qué te gusto?",
          "Ejemplo: hacer la cena de navidad. Porque...",
        ],
        [
          "Piensa en una tarea que no disfrutaste. ¿Por qué no te gusto?",
          "Ejemplo: lavar la ropa. Porque...",
        ],
        ["¿Qué tecnologías te gustan?", "Ejemplo: Java, Html, La nube"],
        ["¿Qué tecnologías no te gustan?", "Ejemplo: Javascript, Sql, Git"],
        ["¿Cuando te enfrentas a un problema difícil, ¿cómo sueles abordarlo?"],
      ]}
    />
  </main>
)

export default SoftwareSpecialization
