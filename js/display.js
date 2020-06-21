// Button
const groupFunctions = {};

function createIcon(id, imgUrl, imgAlt, linkUrl, linkText, group, data = undefined, attr = undefined) {
    data = data ? `data="${data}"` : ''

    caption = linkUrl
        ? `<a class="caption" href="${linkUrl}" target="_blank">${linkText}</a>`
        : `<span class="caption">${linkText}</span>`;


    return `
<div id="${id}" class="button" group="${group}"${data}${attr || ''}>
    <img class="icon" src="${imgUrl}" alt="${imgAlt}">
    ${caption}
</div>`;
}

function createButton(type, id, imgUrl, imgAlt, linkUrl, linkText, group, data = undefined, attr = undefined, selected = false) {

    data = data ? `data="${data}"` : ''

    selected = selected ? "selected" : "";

    caption = linkUrl
        ? `<a class="caption" href="${linkUrl}" target="_blank">${linkText}</a>`
        : `<span class="caption">${linkText}</span>`;

    return `
<div id="${id}" class="button" onclick="${type}Handler(event)" group="${group}"${data}${attr || ''}${selected}>
    <img class="icon" src="${imgUrl}" alt="${imgAlt}">
    ${caption}
</div>
`;
}

function createRadio(id, imgUrl, imgAlt, linkUrl, linkText, group, data = undefined, attr = undefined, selected = false) {
    return createButton('radio', id, imgUrl, imgAlt, linkUrl, linkText, group, data, attr, selected);
}

function createToggle(id, imgUrl, imgAlt, linkUrl, linkText, group, data = undefined, attr = undefined, selected = false) {
    return createButton('toggle', id, imgUrl, imgAlt, linkUrl, linkText, group, data, attr, selected);
}

function radioHandler(e) {

    let target = e.currentTarget;

    let group = target.getAttribute('group');

    let $racials = Array.from(document.querySelectorAll(`.button[group="${group}"]`));

    $racials.forEach(r => r.removeAttribute('selected'));

    target.setAttribute('selected', '')

    if (groupFunctions[group]) {
        groupFunctions[group](group, target);
    }
}

function toggleHandler(e) {
    let target = e.currentTarget;

    if (target) {

        let group = target.getAttribute('group');

        let selected = target.getAttribute('selected');

        if (selected === null)
            target.setAttribute('selected', '');
        else
            target.removeAttribute('selected');

        if (groupFunctions[group]) {
            groupFunctions[group](group, target, !selected);
        }
    }
}



// Layout
function createLayout() {
    return `    
<div id="main">    
    <h1 id="header">~ Warcraft | Spells ~</h1>
    <div id="races">
        <div id="races-alliance-core">
            ${createRaceGroupLayout(Race.Alliance.Core.All)}
        </div>
        <div id="races-alliance-allied">
            ${createRaceGroupLayout(Race.Alliance.Allied.All)}
        </div>
        <div id="races-horde-core">
            ${createRaceGroupLayout(Race.Horde.Core.All)}
        </div>
        <div id="races-horde-allied">
            ${createRaceGroupLayout(Race.Horde.Allied.All)}
        </div>
        <div id="races-neutral">
            ${createRaceGroupLayout(Race.Neutral.All)}
        </div>
    </div>
    <div id="classes">
        <div id="class-group">
            ${createClassLayout()}
        </div>
        <div id="class-filters">
            <div id="class-roles">
                ${createClassRoleLayout()}
            </div>
            <div id="class-gear">
                ${createClassGearLayout()}
            </div>
        </div>
    </div>
    <div id="race-info">        
        <h1 id="race-info-header"></h1>
        <div id="race-info-spells"></div>
    </div>
    <div id="class-info">
        <h1 id="class-info-header"></h1>
        <div id="class-info-specs"></div>
        <div id="spec-info"></div>
    </div>
</div>`;
}


function createRaceGroupLayout(races) {

    let html = '';

    for (const race of races) {
        html += createRaceButton(race);
    }

    return html;
}

function createRaceButton(race) {
    return createRadio(`race-${race.name}`,
        race.getIconPath(),
        race.name,
        race.getLink(),
        race.name,
        'races',
        race.getAlphaName()
    );
}

function createRacial(racial) {
    let button = createIcon(racial.name,
        racial.getIconPath(),
        racial.name,
        racial.getLink(),
        '',
        'racial');

    return `
<div class='racial'>
    ${button}    
    <div class='details'>
        <a class="name" href="${racial.getLink()}" target="_blank">${racial.name}</a>
        <p class="type" type=${racial.isPassive ? "passive" : "active"}>
            ${racial.isPassive ? "Passive" : "Active"}
        </p>
        <p class="description">${racial.description}</p>
    </div>
</div>
`;
}

function createClassLayout() {
    let html = '';

    for (let c of Class.All) {

        html += createRadio(`class-${c.name.toLowerCase()}`,
            c.getIconPath(),
            c.name,
            c.getLink(),
            c.name,
            'classes',
            c.getAlphaName()
        )
    }

    return html;
}


function createClassGearLayout() {
    let html = '';

    for (let g of Gear.All) {

        html += createToggle(`
            gear-${g.name.toLowerCase()}`,
            g.getIconPath(),
            g.name,
            undefined,
            g.name,
            'gear',
            g.name,
            undefined,
            true
        )
    }

    return html;
}

function createClassRoleLayout() {
    let html = '';

    for (let r of Role.All) {

        html += createToggle(
            `role-${r.name.toLowerCase()}`,
            r.getIconPath(),
            r.name,
            undefined,
            r.name,
            'role',
            r.name,
            `role="${r.name.toLowerCase()}"`,
            true
        )
    }

    return html;
}

function createClassSpec(spec) {
    let button = createRadio(
        `spec-${spec.name}`,
        spec.getIconPath(),
        spec.name,
        spec.getLink(),
        spec.name,
        'spec',
        spec.name,
        `role=${spec.role.name.toLowerCase()}`
    )

    console.log(spec.role)
    return button;
    s = `
<div class='spec'>
    ${button}    
    <div class='details'>
    </div>
</div>
`;
    //${createIcon(spec.role.name, spec.role.getIconPath(), spec.role.name, spec.role.name, "spec")}
}

function removeDarkened(group) {
    $group = document.querySelectorAll(`.button[group=${group}]`);

    for ($item of $group) {
        $item.classList.remove('darkened');
    }
}



// Logic
groupFunctions['races'] = function populateRacials(group, $race) {
    const raceName = $race.getAttribute('data');

    const race = Race[raceName];

    removeDarkened(group);

    activateClasses(race.classes);

    // Header
    let $raceHeader = document.getElementById('race-info-header');

    $raceHeader.innerHTML = `
    <img class="race" src="${race.getIconPath()}">
    <a class="name" race="${race.getLowerName()}" faction="${race.faction.name.toLowerCase()}" href="${race.getLink()}" target="_blank">${race.name}</a>
    <img class="faction" src="${race.faction.getIconPath()}">
    `;

    // Racials
    let racials = '';
    for (let ability of race.abilities.sort((a, b) => a.isPassive
        ? (b.isPassive ? a.name.localeCompare(b.name) : 1)
        : (b.isPassive ? -1 : a.name.localeCompare(b.name)))) {
        racial = createRacial(ability);
        racials += racial;
    }

    let $racials = document.getElementById('race-info-spells');
    $racials.innerHTML = racials;
}

groupFunctions['classes'] = function populateClasses(group, $class) {
    const className = $class.getAttribute('data');

    const classItem = Class[className];

    removeDarkened(group);

    activateRaces(classItem.races);

    // Header
    let $classHeader = document.getElementById('class-info-header');
    $classHeader.innerHTML = `
    <img class="class" data="${classItem.getLowerName()}" src="${classItem.getIconPath()}">
    <a class="name" data="${classItem.getAlphaName()}" href="${classItem.getLink()}" target="_blank">${classItem.name}</a>
    <img class="gear" data="${classItem.gear.name.toLowerCase()}" src="${classItem.gear.getIconPath()}">`;

    // Specs
    let specs = '';

    for (let spec of classItem.specs) {

        specs += createClassSpec(spec);
    }

    let $specs = document.getElementById('class-info-specs');
    $specs.innerHTML = specs;

    // Hack
    document.getElementById('spec-info').innerHTML = `
    <div id="spec-info-description"></div>
    <div id="spec-info-spells"></div>`;
}

groupFunctions["gear"] = groupFunctions["role"] = function updateFilter(group, $filter) {
    const roleFilter = getFilter('role');
    const gearFilter = getFilter('gear');

    console.log(roleFilter);
    console.log(gearFilter);

    let total = Class.All.length;

    for (const c of Class.All) {
        let active = true;

        if (!gearFilter[c.gear.name.toLowerCase()]) {
            active = false;
        }
        else {
            active = false;
            for (const s of c.specs) {
                if (roleFilter[s.role.name.toLowerCase()]) {
                    active = true;
                    break;
                }
            }
        }

        const $class = document.getElementById(`class-${c.name.toLowerCase()}`)

        if (active) {
            $class.classList.remove('disabled');
        }
        else {
            $class.classList.add('disabled');
            total--;
        }
    }

    if (total === 0) {
        document.getElementById('class-group').style.opacity = 0;
    }
    else {
        document.getElementById('class-group').style.opacity = 1;
    }
}

groupFunctions['spec'] = function populateSpec(group, $spec) {

    let className = document.querySelector('#class-info-header .name').getAttribute('data');
    let specName = $spec.getAttribute('data');
    let spec = Class[className].getSpec(specName);

    let $description = document.getElementById('spec-info-description');
    // $description.innerHTML = `
    //     <img role=${spec.role.name.toLowerCase()} src="${spec.role.getIconPath()}">
    //     <p>${spec.description}</p>        
    // `;

    $description.innerHTML = `
<div class="spec">
    <div class="icon">
        <img src='${spec.getIconPath()}'>
    </div>
    <div class="details">    
        <a class="name" href="${spec.getLink()}" target="_blank">${spec.name}</a>
        <p class="type" type=${spec.role.name.toLowerCase()}>
            ${spec.role.name}
        </p>
        <p class="description">${spec.description}</p>
    </div>
</div>
`;
}

function getFilter(filter) {
    result = {};

    $filter = document.querySelectorAll(`.button[group=${filter}]`);

    for (let f of $filter) {
        let data = f.getAttribute('data');
        let selected = f.hasAttribute('selected');
        // console.log(`Data: ${data}, Selected: '${selected}'`);
        result[data.toLowerCase()] = selected;
    }

    return result;
}

function activateClasses(classes) {
    $classes = document.querySelectorAll('.button[group="classes"]');

    for ($class of $classes) {
        $class.classList.add('darkened');
    }

    for (c of classes) {
        let $class = document.querySelector(`[data="${c.getAlphaName()}"]`);

        $class.classList.remove('darkened');
    }
}

function activateRaces(races) {
    $races = document.querySelectorAll('.button[group="races"]');

    for ($race of $races) {
        $race.classList.add('darkened');
    }

    for (r of races) {
        let $race = document.querySelector(`[data="${r.getAlphaName()}"]`);

        $race.classList.remove('darkened');
    }
}



// Main
function main() {

    document.body.innerHTML = createLayout();
}

main();