package fr.inti.comhand;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("fr.inti.comhand");

        noClasses()
            .that()
                .resideInAnyPackage("fr.inti.comhand.service..")
            .or()
                .resideInAnyPackage("fr.inti.comhand.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..fr.inti.comhand.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
