<?php

if ($value['afficher'] == 1) {
?>

    <section class="section-<?= $nom_section_flexible ?>">
        <div class="maxWidth">

            <picture>
                <source media="(max-width: 720px)" type="image/png" srcset="<?= $value['image_de_fond']['mobile']['url'] ?>">
                <source media="(min-width: 720px)" type="image/png" srcset="<?= $value['image_de_fond']['desktop']['url'] ?>">
                <img class="bgcImg" src="<?= $value['image_de_fond']['desktop']['url'] ?>" alt="<?= $value['image_de_fond']['desktop']['alt'] ?>">
            </picture>

            <div class="texts">
                <h1>
                    <?php if (!empty($value['logo_titre']['url'])) { ?>
                        <img src="<?= $value['logo_titre']['url'] ?>" alt="<?= $value['logo_titre']['alt'] ?>">
                    <?php } ?>
                    <?= $value['titre'] ?>
                </h1>

                <?php if (!empty($value['breadcrumbs'])) { ?>
                    <p>
                        <?php if (!empty($value['logo_breadcrumbs']['url'])) { ?>
                            <img src="<?= $value['logo_breadcrumbs']['url'] ?>" alt="<?= $value['logo_breadcrumbs']['alt'] ?>">
                        <?php } ?>
                        <?= $value['breadcrumbs'] ?>
                    </p>
                <?php } ?>

            </div>

        </div>
    </section>

<?php } ?>