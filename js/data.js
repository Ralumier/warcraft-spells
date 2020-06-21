const url = "https://www.wowhead.com"

const iconPath = './img/icon'

// Race
class Faction {
    constructor(name) {
        this.name = name;
    }

    isAlliance() {
        return this.name.toLowerCase() === 'alliance';
    }

    isHorde() {
        return this.name.toLowerCase() === 'horde';
    }

    isNeutral() {
        return this.name.toLowerCase() === 'neutral';
    }

    getIconPath() {
        return `${iconPath}/faction/${this.name.toLowerCase()}${this.isNeutral() ? "": ""}.jpg`;
    }

    static Alliance = new Faction('Alliance');
    static Horde = new Faction('Horde');
    static Neutral = new Faction('Neutral');
}

class Race {
    constructor(name, faction, type) {
        this.name = name;

        this.faction = faction;

        this.type = type;

        this.classes = [];

        this.abilities = [];
    }

    isCore() {
        return this.type.toLowerCase() === 'core';
    }

    isAllied() {
        return this.type.toLowerCase() === 'allied';
    }



    getIconPath(gender = 'male', direction = 'right') {
        let name = this.getLowerName();

        return `${iconPath}/race/${name}/${name}_${gender.toLowerCase()}_${direction.toLowerCase()}.jpg`
    }

    getLink() {

        let urlName = this.getLinkName().toLowerCase();

        return `${url}/${urlName}`
    }

    getLinkName() {
        return this.name.replace(/[ ]/gi, '-').replace(/[^A-Za-z-]/gi, '');
    }

    getAlphaName() {
        return this.name.replace(/[^A-Za-z]/gi, '');
    }

    getLowerName() {
        return this.getAlphaName().toLowerCase();
    }

    // Statics
    static Human = new Race('Human', Faction.Alliance, 'Core');
    static Dwarf = new Race('Dwarf', Faction.Alliance, 'Core');
    static NightElf = new Race('Night Elf', Faction.Alliance, 'Core');
    static Gnome = new Race('Gnome', Faction.Alliance, 'Core');
    static Draenei = new Race('Draenei', Faction.Alliance, 'Core');
    static Worgen = new Race('Worgen', Faction.Alliance, 'Core');
    static VoidElf = new Race('Void Elf', Faction.Alliance, 'Allied');
    static LightforgedDraenei = new Race('Lightforged Draenei', Faction.Alliance, 'Allied');
    static DarkIronDwarf = new Race('Dark Iron Dwarf', Faction.Alliance, 'Allied');
    static KulTiran = new Race('Kul Tiran', Faction.Alliance, 'Allied');
    static Mechagnome = new Race('Mechagnome', Faction.Alliance, 'Allied');
    static Orc = new Race('Orc', Faction.Horde, 'Core');
    static Undead = new Race('Undead', Faction.Horde, 'Core');
    static Tauren = new Race('Tauren', Faction.Horde, 'Core');
    static Troll = new Race('Troll', Faction.Horde, 'Core');
    static BloodElf = new Race('Blood Elf', Faction.Horde, 'Core');
    static Goblin = new Race('Goblin', Faction.Horde, 'Core');
    static Nightborne = new Race('Nightborne', Faction.Horde, 'Allied');
    static HighmountainTauren = new Race('Highmountain Tauren', Faction.Horde, 'Allied');
    static MagharOrc = new Race('Mag\'har Orc', Faction.Horde, 'Allied');
    static ZandalariTroll = new Race('Zandalari Troll', Faction.Horde, 'Allied');
    static Vulpera = new Race('Vulpera', Faction.Horde, 'Allied');
    static Pandaren = new Race('Pandaren', Faction.Neutral, 'Core');

    static Alliance = {
        All: [
            this.Human,
            this.Dwarf,
            this.NightElf,
            this.Gnome,
            this.Draenei,
            this.Worgen,
            this.VoidElf,
            this.LightforgedDraenei,
            this.DarkIronDwarf,
            this.KulTiran,
            this.Mechagnome,
        ],
        Human: this.Human,
        Dwarf: this.Dwarf,
        NightElf: this.NightElf,
        Gnome: this.Gnome,
        Draenei: this.Draenei,
        Worgen: this.Worgen,
        VoidElf: this.VoidElf,
        LightforgedDraenei: this.LightforgedDraenei,
        DarkIronDwarf: this.DarkIronDwarf,
        KulTiran: this.KulTiran,
        Mechagnome: this.Mechagnome,
        Core: {
            All: [
                this.Human,
                this.Dwarf,
                this.NightElf,
                this.Gnome,
                this.Draenei,
                this.Worgen,
            ],
            Human: this.Human,
            Dwarf: this.Dwarf,
            NightElf: this.NightElf,
            Gnome: this.Gnome,
            Draenei: this.Draenei,
            Worgen: this.Worgen,
        },
        Allied: {
            All: [
                this.VoidElf,
                this.LightforgedDraenei,
                this.DarkIronDwarf,
                this.KulTiran,
                this.Mechagnome,
            ],
            VoidElf: this.VoidElf,
            LightforgedDraenei: this.LightforgedDraenei,
            DarkIronDwarf: this.DarkIronDwarf,
            KulTiran: this.KulTiran,
            Mechagnome: this.Mechagnome,
        },
    }

    static Horde = {
        All: [
            this.Orc,
            this.Undead,
            this.Tauren,
            this.Troll,
            this.BloodElf,
            this.Goblin,
            this.Nightborne,
            this.HighmountainTauren,
            this.MagharOrc,
            this.ZandalariTroll,
            this.Vulpera,
        ],
        Orc: this.Orc,
        Undead: this.Undead,
        Tauren: this.Tauren,
        Troll: this.Troll,
        BloodElf: this.BloodElf,
        Goblin: this.Goblin,
        Nightborne: this.Nightborne,
        HighmountainTauren: this.HighmountainTauren,
        MagharOrc: this.MagharOrc,
        ZandalariTroll: this.ZandalariTroll,
        Vulpera: this.Vulpera,
        Core: {
            All: [
                this.Orc,
                this.Undead,
                this.Tauren,
                this.Troll,
                this.BloodElf,
                this.Goblin,
            ],
            Orc: this.Orc,
            Undead: this.Undead,
            Tauren: this.Tauren,
            Troll: this.Troll,
            BloodElf: this.BloodElf,
            Goblin: this.Goblin,
        },
        Allied: {
            All: [
                this.Nightborne,
                this.HighmountainTauren,
                this.MagharOrc,
                this.ZandalariTroll,
                this.Vulpera,
            ],
            Nightborne: this.Nightborne,
            HighmountainTauren: this.HighmountainTauren,
            MagharOrc: this.MagharOrc,
            ZandalariTroll: this.ZandalariTroll,
            Vulpera: this.Vulpera,
        },
    }

    static Neutral = {
        All: [
            this.Pandaren,
        ],
        Pandaren: this.Pandaren,
        Core: {
            All: [
                this.Pandaren,
            ],
            Pandaren: this.Pandaren,
        },
    }

    static All = [...this.Alliance.All, ...this.Horde.All, ...this.Neutral.All]
}


// Class
class Gear {
    constructor(name) {
        this.name = name;
    }

    static Cloth = new Gear('Cloth');
    static Leather = new Gear('Leather');
    static Mail = new Gear('Mail');
    static Plate = new Gear('Plate');

    static All = [this.Cloth, this.Leather, this.Mail, this.Plate];

    getIconPath() {
        let name = this.name.toLowerCase();

        return `${iconPath}/gear/${name}.jpg`
    }
}

class Role {
    constructor(name) {
        this.name = name;
    }

    static Tank = new Role('Tank');
    static Healer = new Role('Healer');
    static Melee = new Role('Melee');
    static Ranged = new Role('Ranged');

    static All = [this.Tank, this.Healer, this.Melee, this.Ranged,]


    getIconPath() {
        let name = this.name.toLowerCase();

        return `${iconPath}/roles/${name}.jpg`
    }
}

class Spec {
    constructor(specData, classObj) {
        const [name, role, description] = specData.split('::', 3);

        this.name = name;

        this.role = Role[role];

        this.class = classObj;

        this.description = description;
    }

    getIconPath() {
        let specName = this.getLowerName();
        let className = this.class.getLowerName();

        return `${iconPath}/class/${className}/${className}_${specName}.jpg`
    }

    getLink() {

        let urlSpecName = this.getLinkName().toLowerCase();
        let urlClassName = this.class.getLinkName().toLowerCase();

        return `${url}/${urlSpecName}-${urlClassName}-guide`
    }

    getLinkName() {
        return this.name.replace(/[ ]/gi, '-').replace(/[^A-Za-z-]/gi, '');
    }


    getAlphaName() {
        return this.name.replace(/[^A-Za-z]/gi, '');
    }

    getLowerName() {
        return this.getAlphaName().toLowerCase();
    }

}

class Class {
    constructor(name, gear, specs) {

        this.gear = gear;

        this.name = name;

        this.specs = specs.map(specData => new Spec(specData, this));

        this.races = [];
    }

    getIconPath() {
        let name = this.getLowerName();

        return `${iconPath}/class/${name}/${name}.jpg`
    }

    getLink() {

        let urlName = this.getLinkName().toLowerCase();

        return `${url}/${urlName}`
    }

    getLinkName() {
        return this.name.replace(/[ ]/gi, '-').replace(/[^A-Za-z-]/gi, '');
    }

    getAlphaName() {
        return this.name.replace(/[^A-Za-z]/gi, '');
    }

    getLowerName() {
        return this.getAlphaName().toLowerCase();
    }

    getSpec(name) {
        return this.specs.find(s => s.name === name);
    }

    static Warrior = new Class('Warrior', Gear.Plate, ['Arms::Melee::A battle-hardened master of two-handed weapons, using mobility and overpowering attacks to strike their opponents down.', 'Fury::Melee::A furious berserker of wielding a weapon in each hand, unleashing a flurry of attacks to carve their opponents to pieces.', 'Protection::Tank:: A stalwart protector who uses a shield to safeguard themselves and their allies.']);
    static Paladin = new Class('Paladin', Gear.Plate, ['Holy::Healer::Invokes the power of the Light to protect and to heal.', 'Protection::Tank::Uses Holy magic to shield themselves and defend allies from attackers.', 'Retribution::Melee::A righteous crusader who judges and punishes opponents with weapons and Holy magic.']);
    static Hunter = new Class('Hunter', Gear.Mail, ['Beast Mastery::Ranged::A master of the wild who can tame a wide variety of beasts to assist them in combat.', 'Marksmanship::Ranged::A master archer or sharpshooter who excels in bringing down enemies from afar.', 'Survival::Melee::A rugger tracker who favors using animal venom, explosives and traps as deadly weapons.']);
    static Rogue = new Class('Rogue', Gear.Leather, ['Assassination::Melee::A deadly master of poisons who dispatches victims with vicious dagger strikes:', 'Outlaw::Melee::A ruthless fugitive who uses agility and guile to stand toe-to-toe with enemies.', 'Subtlety::Melee::A dark stalker who leaps from the shadows to ambush their unsuspecting prey.']);
    static Priest = new Class('Priest', Gear.Cloth, ['Discipline::Healer::Uses magic to shield allies from taking damage as well as heal their wounds.', 'Holy::Healer::A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave.', 'Shadow::Ranged::Uses sinister Shadow magic, especially damage-over-time spells, to eradicate enemies.']);
    static Shaman = new Class('Shaman', Gear.Mail, ['Elemental::Ranged::The elemental force of the shamans can be used to damage enemies from afar with lightning strikes, earthquakes, and lava bursts.', 'Enhancement::Melee::Shamans enhance their weapons with elemental effects, empowering their blows with the power of fire, wind, or ice.', 'Restoration::Healer::By calling on their spiritual power, shamans can restore health to injured allies.']);
    static Mage = new Class('Mage', Gear.Cloth, ['Arcane::Ranged::Manipulate the arcane, destroying enemies with overwhelming power.', 'Fire::Ranged::Ignite enemies with balls of fire and combustive flames.', 'Frost::Ranged::Freezes enemies in their tracks and shatters them with Frost magic.']);
    static Warlock = new Class('Warlock', Gear.Cloth, ['Affliction::Ranged::A master of shadow magic who specializes in drains and damage-over-time spells.', 'Demonology::Ranged::A master of demons who compels demonic powers to aid them.', 'Destruction::Ranged::A master of chaos who calls down fire to turn and demolish enemies.']);
    static Monk = new Class('Monk', Gear.Leather, ['Brewmaster::Tank::A sturdy brawler who uses liquid fortification and unpredictable movement to avoid damage and protect allies.', 'Mistweaver::Healer::A healer who masters the mysterious art of manipulating life energies, aided by the wisdom of the Jade Serpent and Pandaren medicinal techniques.', 'Windwalker::Melee::A martial artist without peer who pummels foes with hands and fists.']);
    static Druid = new Class('Druid', Gear.Leather, ['Balance::Ranged::Druids can take on the form of a wild moonkin to blast enemies from afar.', 'Feral::Melee::Druids can take on the form of a savage cat in order to claw and bite their enemies up close.', 'Guardian::Tank::When shapeshifted into their bear form, druids possess a thick skin and imposing presence that makes them ideal front-line protectors of weaker party members.', 'Restoration::Healer::By calling upon the powers of nature, druids are able to swiftly restore health to their injured allies.']);
    static DemonHunter = new Class('Demon Hunter', Gear.Leather, ['Havoc::Melee::A brooding master of warglaives and the destructive power of Fel magic.', 'Vengeance::Tank::Embraces the demon within to incinerate enemies and protect their allies.']);
    static DeathKnight = new Class('Death Knight', Gear.Plate, ['Blood::Tank::A dark guardian who manipulates and corrupts life energy to sustain themselves in the face of an enemy onslaught.', 'Frost::Melee::An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.', 'Unholy::Melee::A master of death and decay, spreading infection and controlling undead minions to do their bidding.']);

    static All = [
        this.Warrior, this.Paladin, this.Hunter, this.Rogue, this.Priest, this.Shaman,
        this.Mage, this.Warlock, this.Monk, this.Druid, this.DemonHunter, this.DeathKnight
    ];
}


// Link Races and Classes
function linkRacesAndClasses() {

    function link(race, classes) {
        race.classes = classes;

        for (c of classes) {
            c.races.push(race);
        }
    }

    link(Race.Human, [Class.Warrior, Class.Paladin, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
    link(Race.Dwarf, [Class.Warrior, Class.Paladin, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
    link(Race.NightElf, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Monk, Class.Druid, Class.DemonHunter, Class.DeathKnight]);
    link(Race.Gnome, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
    link(Race.Draenei, [Class.Warrior, Class.Paladin, Class.Hunter, Class.Priest, Class.Shaman, Class.Mage, Class.Monk, Class.DeathKnight]);
    link(Race.Worgen, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Warlock, Class.Druid, Class.DeathKnight]);

    link(Race.Orc, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Shaman, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
    link(Race.Undead, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
    link(Race.Tauren, [Class.Warrior, Class.Paladin, Class.Hunter, Class.Priest, Class.Shaman, Class.Monk, Class.Druid, Class.DeathKnight]);
    link(Race.Troll, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Warlock, Class.Monk, Class.Druid, Class.DeathKnight]);
    link(Race.BloodElf, [Class.Warrior, Class.Paladin, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Warlock, Class.Monk, Class.DemonHunter, Class.DeathKnight]);
    link(Race.Goblin, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Warlock, Class.DeathKnight]);

    link(Race.Pandaren, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Monk, Class.DeathKnight]);

    link(Race.VoidElf, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
    link(Race.LightforgedDraenei, [Class.Warrior, Class.Paladin, Class.Hunter, Class.Priest, Class.Mage, Class.DeathKnight]);
    link(Race.DarkIronDwarf, [Class.Warrior, Class.Paladin, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
    link(Race.KulTiran, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Monk, Class.Druid, Class.DeathKnight]);
    link(Race.Mechagnome, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);

    link(Race.Nightborne, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
    link(Race.HighmountainTauren, [Class.Warrior, Class.Hunter, Class.Shaman, Class.Monk, Class.Druid, Class.DeathKnight]);
    link(Race.MagharOrc, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Monk, Class.DeathKnight]);
    link(Race.ZandalariTroll, [Class.Warrior, Class.Paladin, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Monk, Class.Druid, Class.DeathKnight]);
    link(Race.Vulpera, [Class.Warrior, Class.Hunter, Class.Rogue, Class.Priest, Class.Shaman, Class.Mage, Class.Warlock, Class.Monk, Class.DeathKnight]);
}

linkRacesAndClasses();


// Spells
class Spell {
    constructor(id, name, description, casttime, cooldown, url, imagePath, category, subcategory) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.casttime = casttime;
        this.cooldown = cooldown;
        this.url = url;
        this.imagePath = imagePath;
    }

    get isPassive() {
        return this.casttime == 'Instant' && !this.cooldown;
    }

    getLink() {
        return this.url;
    }

    getIconPath() {
        return this.imagePath;
    }
}

function addRacials() {
    function add(race, id, name, description, category, casttime, cooldown, url, imagePath) {
        const spell = new Spell(id, name, description, casttime, cooldown, url, imagePath, category);

        race.abilities.push(spell);
    }

    add(Race.BloodElf, 28730, 'Arcane Torrent', 'Remove 1 beneficial effect from all enemies within 8 yards and restore 3% of your Mana, 15 Energy, 15 Rage, 15 Focus, 1 Holy Power, 1 Chi, or 20 Runic Power.', 'Racial', 'Instant', '2 minutes', 'https://www.wowhead.com/spell=28730/arcane-torrent', './img/icon/racial/ArcaneTorrent.png');
    add(Race.BloodElf, 154742, 'Arcane Acuity', 'Increases critical strike chance by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=154742/arcane-acuity', './img/icon/racial/ArcaneAcuity.png');
    add(Race.BloodElf, 28877, 'Arcane Affinity', 'Enchanting skill increased by 10.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=28877/arcane-affinity', './img/icon/racial/ArcaneAffinity.png');
    add(Race.BloodElf, 822, 'Arcane Resistance', 'Reduces Arcane damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=822/arcane-resistance', './img/icon/racial/ArcaneResistance.png');
    add(Race.Tauren, 154743, 'Brawn', 'Critical strike bonus damage and healing increased by 2%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=154743/brawn', './img/icon/racial/Brawn.png');
    add(Race.Tauren, 20552, 'Cultivation', 'Herbalism skill increased by 15 and you gather herbs faster than normal herbalists.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20552/cultivation?classicRedirect', './img/icon/racial/Cultivation.png');
    add(Race.Tauren, 20550, 'Endurance', 'Increases your Stamina by 197 (scales with level).', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20550/endurance?classicRedirect', './img/icon/racial/Endurance.png');
    add(Race.Tauren, 20551, 'Nature Resistance', 'Reduces Nature damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20551/nature-resistance?classicRedirect', './img/icon/racial/NatureResistance.png');
    add(Race.Tauren, 20549, 'War Stomp', 'Stuns up to 5 enemies within 8 yds for 2 sec.', 'Racial', '500 milliseconds', '2 minutes', 'https://classic.wowhead.com/spell=20549/war-stomp?classicRedirect', './img/icon/racial/WarStomp.png');
    add(Race.Human, 20599, 'Diplomacy', 'Reputation gains increased by 10%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20599/diplomacy?classicRedirect', './img/icon/racial/Diplomacy.png');
    add(Race.Human, 59752, 'Every Man for Himself', 'Removes all stun effects. This effect shares a 90 sec cooldown with other similar effects.', 'Racial', 'Instant', '3 minutes', 'https://www.wowhead.com/spell=59752/every-man-for-himself', './img/icon/racial/EveryManforHimself.png');
    add(Race.Human, 20598, 'The Human Spirit', 'You gain 2% more of all secondary stats (Haste, Critical Strike, Mastery, Versatility) from all sources.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20598/the-human-spirit?classicRedirect', './img/icon/racial/TheHumanSpirit.png');
    add(Race.Troll, 20555, 'Regeneration', 'Health regeneration rate increased by 10%.  10% of total Health regeneration may continue during combat.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20555/regeneration?classicRedirect', './img/icon/racial/Regeneration.png');
    add(Race.Troll, 20557, 'Beast Slaying', 'Experience gains from killing Beasts increased by 20%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20557/beast-slaying?classicRedirect', './img/icon/racial/BeastSlaying.png');
    add(Race.Troll, 26297, 'Berserking', 'Increases your haste by 15% for 10 sec.', 'Racial', 'Instant', '3 minutes', 'https://classic.wowhead.com/spell=26297/berserking?classicRedirect', './img/icon/racial/Berserking.png');
    add(Race.Troll, 58943, 'Da Voodoo Shuffle', 'Reduces the duration of all movement impairing effects by 20%.  Trolls be flippin&apos; out mon!', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=58943/da-voodoo-shuffle', './img/icon/racial/DaVoodooShuffle.png');
    add(Race.Orc, 33697, 'Blood Fury', 'Increases melee and ranged attack power for 15 seconds.', 'Racial', 'Instant', '2 minutes', 'https://www.wowhead.com/spell=33697/blood-fury', './img/icon/racial/BloodFury.png');
    add(Race.Orc, 20573, 'Hardiness', 'Duration of Stun effects reduced by an additional 20%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20573/hardiness?classicRedirect', './img/icon/racial/Hardiness.png');
    add(Race.Orc, 21563, 'Command', 'Damage dealt by pets increased by 1%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=21563/command?classicRedirect', './img/icon/racial/Command.png');
    add(Race.ZandalariTroll, 292492, 'Embrace of the Loa', 'Choose your Loa.', 'Racial', 'Instant', '5 days', 'https://www.wowhead.com/spell=292492/embrace-of-the-loa', './img/icon/racial/EmbraceoftheLoa.png');
    add(Race.ZandalariTroll, 281954, 'Pterrordax Swoop', 'Reduces your falling speed for 2 minutes. 15 minute cooldown.', 'Racial', 'Instant', '15 minutes', 'https://www.wowhead.com/spell=281954/pterrordax-swoop', './img/icon/racial/PterrordaxSwoop.png');
    add(Race.ZandalariTroll, 291944, 'Regeneratin\'', 'Regenerate 100% of your maximum health over 6 sec, interrupted by damage. 2.5 min cooldown.', 'Racial', 'Channeled', '2.5 minutes', 'https://www.wowhead.com/spell=291944/regeneratin', './img/icon/racial/Regeneratin\'.png');
    add(Race.Vulpera, 312411, 'Bag of Tricks', 'Pull your chosen trick from the bag and use it on target enemy or ally. Enemies take damage, while allies are healed. 1.5 minute cooldown. Rummage Your Bag: Change the contents of your Bag of Tricks. 5 minute cooldown.', 'Racial', 'Instant', '1.5 minutes', 'https://www.wowhead.com/spell=312411/bag-of-tricks', './img/icon/racial/BagofTricks.png');
    add(Race.Vulpera, 312370, 'Make Camp', 'Make a camp at this location. Can only be used outdoors. Return to Camp: Return to your camp. 1 hour cooldown.', 'Racial', '5 seconds', '10 minutes', 'https://www.wowhead.com/spell=312370/make-camp', './img/icon/racial/MakeCamp.png');
    add(Race.Vulpera, 317795, 'Alpaca Saddlebags', 'Increases the size of your backpack by 8 slots.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=317795/alpaca-saddlebags', './img/icon/racial/AlpacaSaddlebags.png');
    add(Race.Vulpera, 312198, 'Fire Resistance', 'Reduces Fire damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=312198/fire-resistance', './img/icon/racial/FireResistance.png');
    add(Race.Vulpera, 312215, 'Nose For Trouble', 'When you first take damage from an enemy, reduce that damage by 5% of your maximum health.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=312215/nose-for-trouble', './img/icon/racial/NoseForTrouble.png');
    add(Race.Dwarf, 92682, 'Explorer', 'You find additional fragments when looting archaeological finds and you can survey faster than normal archaeologists.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=92682/explorer', './img/icon/racial/Explorer.png');
    add(Race.Dwarf, 20596, 'Frost Resistance', 'Reduces Frost damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20596/frost-resistance?classicRedirect', './img/icon/racial/FrostResistance.png');
    add(Race.Dwarf, 59224, 'Might of the Mountain', 'Critical strike bonus damage and healing increased by 2%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=59224/might-of-the-mountain', './img/icon/racial/MightoftheMountain.png');
    add(Race.Dwarf, 20594, 'Stoneform', 'Removes all poison, disease, curse, magic, and bleed effects and reduces all physical damage taken by 10% for 8 sec.', 'Racial', 'Instant', '3 minutes', 'https://classic.wowhead.com/spell=20594/stoneform?classicRedirect', './img/icon/racial/Stoneform.png');
    add(Race.HighmountainTauren, 255654, 'Bull Rush', 'Bull Rush Charges forward for 1 sec, knocking enemies down for 1.5 sec. 2 min CD.', 'Racial', 'Instant', '2 minutes', 'https://www.wowhead.com/spell=255654/bull-rush', './img/icon/racial/BullRush.png');
    add(Race.HighmountainTauren, 255655, 'Pride of Ironhorn', 'Pride of Ironhorn Mining skill increased by 15 and allows you to mine faster.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255655/pride-of-ironhorn', './img/icon/racial/PrideofIronhorn.png');
    add(Race.HighmountainTauren, 255658, 'Mountaineer', 'Mountaineer Increases Versatility by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255658/mountaineer', './img/icon/racial/Mountaineer.png');
    add(Race.HighmountainTauren, 255659, 'Rugged Tenacity', 'Rugged Tenacity Reduces damage taken by (character level) * 3.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255659/rugged-tenacity', './img/icon/racial/RuggedTenacity.png');
    add(Race.HighmountainTauren, 255656, 'Waste Not, Want Not', 'Waste Not, Want Not You have a chance to loot additional meat and fish.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255656/waste-not-want-not', './img/icon/racial/WasteNot,WantNot.png');
    add(Race.Undead, 20577, 'Cannibalize', 'When activated, regenerates 7% of total health and mana every 2 sec for 10 sec.  Only works on Humanoid or Undead corpses within 5 yds.  Any movement, action, or damage taken while Cannibalizing will cancel the effect.', 'Racial', 'Instant', '2 minutes', 'https://classic.wowhead.com/spell=20577/cannibalize?classicRedirect', './img/icon/racial/Cannibalize.png');
    add(Race.Undead, 20579, 'Shadow Resistance', 'Reduces Shadow damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20579/shadow-resistance?classicRedirect', './img/icon/racial/ShadowResistance.png');
    add(Race.Undead, 5227, 'Touch of the Grave', 'Your attacks and damaging spells have a chance to drain the target, dealing 1932 to 2244 Shadow damage and healing you for the same amount.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=5227/touch-of-the-grave', './img/icon/racial/TouchoftheGrave.png');
    add(Race.Undead, 7744, 'Will of the Forsaken', 'Removes any Charm, Fear and Sleep effect. This effect shares a 30 sec cooldown with other similar effects. Additionally, you can breathe underwater indefinitely.', 'Racial', 'Instant', '2 minutes', 'https://classic.wowhead.com/spell=7744/will-of-the-forsaken?classicRedirect', './img/icon/racial/WilloftheForsaken.png');
    add(Race.NightElf, 20583, 'Nature Resistance', 'Reduces Nature damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20583/nature-resistance?classicRedirect', './img/icon/racial/NatureResistance.png');
    add(Race.NightElf, 20585, 'Wisp Spirit', 'Transform into a wisp upon death, increasing speed by 75%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20585/wisp-spirit?classicRedirect', './img/icon/racial/WispSpirit.png');
    add(Race.NightElf, 20582, 'Quickness', 'Increases your chance to dodge melee and ranged attacks by 2%, and your movement speed by 2%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20582/quickness?classicRedirect', './img/icon/racial/Quickness.png');
    add(Race.NightElf, 58984, 'Shadowmeld', 'Activate to slip into the shadows, reducing the chance for enemies to detect your presence.  Lasts until cancelled or upon moving.  Any threat is restored versus enemies still in combat upon cancellation of this effect.', 'Racial', 'Instant', '2 minutes', 'https://www.wowhead.com/spell=58984/shadowmeld', './img/icon/racial/Shadowmeld.png');
    add(Race.NightElf, 154748, 'Touch of Elune', 'Increases your Haste by 1% during the night.Increases your Critical Strike by 1% during the day.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=154748/touch-of-elune', './img/icon/racial/TouchofElune.png');
    add(Race.KulTiran, 287712, 'Haymaker', 'Wind up, then unleash your might upon your foe, dealing 20 Physical damage, stunning for 3 sec, and knocking them back substantially. 2.5 minute cooldown', 'Racial', '1 second', '2.5 minutes', 'https://www.wowhead.com/spell=287712/haymaker', './img/icon/racial/Haymaker.png');
    add(Race.KulTiran, 291628, 'Brush It Off', 'Increases Versatility by 1%. When you take damage, heal for 2% of that amount over 4 sec.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=291628/brush-it-off', './img/icon/racial/BrushItOff.png');
    add(Race.KulTiran, 291622, 'Child of the Sea', 'Hold your breath for 50% longer and swim 10% faster.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=291622/child-of-the-sea', './img/icon/racial/ChildoftheSea.png');
    add(Race.KulTiran, 291442, 'Jack of All Trades', 'Increases all Tradeskills by 5.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=291442/jack-of-all-trades', './img/icon/racial/JackofAllTrades.png');
    add(Race.KulTiran, 291417, 'Rime of the Ancient Mariner', 'Reduces Frost and Nature damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=291417/rime-of-the-ancient-mariner', './img/icon/racial/RimeoftheAncientMariner.png');
    add(Race.Goblin, 69042, 'Time is Money', 'Cash in on a 1% increase to haste.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=69042/time-is-money', './img/icon/racial/TimeisMoney.png');
    add(Race.Goblin, 69044, 'Best Deals Anywhere', 'Always receive the best possible gold discount, regardless of faction.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=69044/best-deals-anywhere', './img/icon/racial/BestDealsAnywhere.png');
    add(Race.Goblin, 69045, 'Better Living Through Chemistry', 'Alchemy skill increased by 15.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=69045/better-living-through-chemistry', './img/icon/racial/BetterLivingThroughChemistry.png');
    add(Race.Goblin, 69046, 'Pack Hobgoblin', 'Calls in your friend, Gobber, allowing you bank access for 1 min.', 'Racial', 'Instant', '30 minutes', 'https://www.wowhead.com/spell=69046/pack-hobgoblin', './img/icon/racial/PackHobgoblin.png');
    add(Race.Goblin, 69041, 'Rocket Barrage', 'Launches your belt rockets at an enemy, dealing (1 + Level * 2) fire damage.', 'Racial', 'Instant', '1.5 minutes', 'https://www.wowhead.com/spell=69041/rocket-barrage', './img/icon/racial/RocketBarrage.png');
    add(Race.Goblin, 69070, 'Rocket Jump', 'Activates your rocket belt to jump forward.  Other effects which slow the rate of falling cannot be used within 10 sec after using this ability.', 'Racial', 'Instant', '1.5 minutes', 'https://www.wowhead.com/spell=69070/rocket-jump', './img/icon/racial/RocketJump.png');
    add(Race.Nightborne, 255661, 'Cantrips', 'Conjure up an Eldritch Grimoire, allowing you mail access for 1.5 min.', 'Racial', '3 seconds', '10 minutes', 'https://www.wowhead.com/spell=255661/cantrips', './img/icon/racial/Cantrips.png');
    add(Race.Nightborne, 260364, 'Arcane Pulse', 'Deals (200% Attack Power) Arcane damage to nearby enemies every 2 seconds and snares them by 50%. Lasts 20 sec.', 'Racial', 'Instant', '3 minutes', 'https://www.wowhead.com/spell=260364/arcane-pulse', './img/icon/racial/ArcanePulse.png');
    add(Race.Nightborne, 255663, 'Ancient History', 'Inscription skill increased by 15.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255663/ancient-history', './img/icon/racial/AncientHistory.png');
    add(Race.Nightborne, 255665, 'Magical Affinity', 'Increases magical damage 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255665/magical-affinity', './img/icon/racial/MagicalAffinity.png');
    add(Race.Nightborne, 255664, 'Arcane Resistance', 'Reduces Arcane damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255664/arcane-resistance', './img/icon/racial/ArcaneResistance.png');
    add(Race.VoidElf, 256948, 'Spatial Rift', 'Tear a rift in space. Reactivate this ability to teleport through the rift. 30 yd range. 3 min cooldown.Spatial Rift: Rip a hole in space and time, transporting you to the targeted location.', 'Racial', 'Instant', '3 minutes', 'https://www.wowhead.com/spell=256948/spatial-rift', './img/icon/racial/SpatialRift.png');
    add(Race.VoidElf, 255668, 'Chill of Night', 'Reduces Shadow damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255668/chill-of-night', './img/icon/racial/ChillofNight.png');
    add(Race.VoidElf, 255669, 'Entropic Embrace', 'Your abilities have a chance to empower you with the essence of the Void.  Entropic Embrace increases damage and healing by 5% for 12 sec. It has a 33% proc chance with 60 seconds internal cooldown.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255669/entropic-embrace', './img/icon/racial/EntropicEmbrace.png');
    add(Race.VoidElf, 255667, 'Ethereal Connection', 'Reduces the cost of Void Storage and Transmogrification by 50%', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255667/ethereal-connection', './img/icon/racial/EtherealConnection.png');
    add(Race.VoidElf, 255670, 'Preternatural Calm', 'Your spell casts are not delayed by taking damage.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255670/preternatural-calm', './img/icon/racial/PreternaturalCalm.png');
    add(Race.Worgen, 68976, 'Aberration', 'Reduces Shadow and Nature damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=68976/aberration', './img/icon/racial/Aberration.png');
    // add(Race.Worgen, 94293, 'Altered Form', 'Enables Worgens to switch between human and Worgan forms', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=94293/altered-form', './img/icon/racial/AlteredForm.png');
    add(Race.Worgen, 68992, 'Darkflight', 'Activates your true form, increasing current movement speed by an additional 40% for 10 sec.', 'Racial', 'Instant', '2 minutes', 'https://www.wowhead.com/spell=68992/darkflight', './img/icon/racial/Darkflight.png');
    add(Race.Worgen, 68978, 'Flayer', 'Skinning skill increased by 15 and allows you to skin faster.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=68978/flayer', './img/icon/racial/Flayer.png');
    add(Race.Worgen, 87840, 'Running Wild', 'Drop to all fours to run as fast as a wild animal.', 'Racial', '1.5 seconds', undefined, 'https://www.wowhead.com/spell=87840/running-wild', './img/icon/racial/RunningWild.png');
    add(Race.Worgen, 68996, 'Two Forms', 'Turn into your currently inactive form.', 'Racial', 'Instant', '1.5 seconds', 'https://www.wowhead.com/spell=68996/two-forms', './img/icon/racial/TwoForms.png');
    add(Race.Worgen, 68975, 'Viciousness', 'Increases critical strike chance by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=68975/viciousness', './img/icon/racial/Viciousness.png');
    add(Race.Draenei, 121093, 'Gift of the Naaru', 'Heals the target for 20% of the caster&apos;s total health over 5 sec.', 'Racial', 'Instant', '3 minutes', 'https://www.wowhead.com/spell=121093/gift-of-the-naaru', './img/icon/racial/GiftoftheNaaru.png');
    add(Race.Draenei, 28875, 'Gemcutting', 'Jewelcrafting skill increased by 10.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=28875/gemcutting', './img/icon/racial/Gemcutting.png');
    add(Race.Draenei, 6562, 'Heroic Presence', 'Increases your Strength, Agility, and Intellect by 425 (scales with level).', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=6562/heroic-presence', './img/icon/racial/HeroicPresence.png');
    add(Race.Draenei, 59221, 'Shadow Resistance', 'Reduces Shadow damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=59221/shadow-resistance', './img/icon/racial/ShadowResistance.png');
    add(Race.Gnome, 20592, 'Arcane Resistance', 'Reduces Arcane damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20592/arcane-resistance?classicRedirect', './img/icon/racial/ArcaneResistance.png');
    add(Race.Gnome, 20593, 'Engineering Specialization', 'Engineering skill increased by 15.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20593/engineering-specialization?classicRedirect', './img/icon/racial/EngineeringSpecialization.png');
    add(Race.Gnome, 20589, 'Escape Artist', 'Escape the effects of any immobilization or movement speed reduction effect.', 'Racial', '500 milliseconds', '1 minute', 'https://classic.wowhead.com/spell=20589/escape-artist?classicRedirect', './img/icon/racial/EscapeArtist.png');
    add(Race.Gnome, 20591, 'Expansive Mind', 'Maximum resource increased by 5%.', 'Racial', 'Instant', undefined, 'https://classic.wowhead.com/spell=20591/expansive-mind?classicRedirect', './img/icon/racial/ExpansiveMind.png');
    add(Race.Gnome, 92680, 'Nimble Fingers', 'Haste increased by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=92680/nimble-fingers', './img/icon/racial/NimbleFingers.png');
    add(Race.Pandaren, 107076, 'Bouncy', 'You take half falling damage.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=107076/bouncy', './img/icon/racial/Bouncy.png');
    add(Race.Pandaren, 107072, 'Epicurean', 'Your love of food allows you to receive double the stats from Well Fed effects.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=107072/epicurean', './img/icon/racial/Epicurean.png');
    add(Race.Pandaren, 107073, 'Gourmand', 'Your Cooking skill is increased by 15.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=107073/gourmand', './img/icon/racial/Gourmand.png');
    add(Race.Pandaren, 107074, 'Inner Peace', 'Your rested experience bonus lasts twice as long as normal.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=107074/inner-peace', './img/icon/racial/InnerPeace.png');
    add(Race.Pandaren, 107079, 'Quaking Palm', 'Strikes the target with lightning speed, incapacitating them for 4 sec, and turns off your attack.', 'Racial', 'Instant', '2 minutes', 'https://www.wowhead.com/spell=107079/quaking-palm', './img/icon/racial/QuakingPalm.png');
    add(Race.LightforgedDraenei, 255647, 'Light\'s Judgment', 'Light\'s Judgment Call down a strike of Holy energy, dealing Holy damage to enemies within 5 yards after 3 sec. 40 yd. 2.5 min CD. Instant.', 'Racial', 'Instant', '2.5 minutes', 'https://www.wowhead.com/spell=255647/lights-judgment', './img/icon/racial/Light\'sJudgment.png');
    add(Race.LightforgedDraenei, 259930, 'Forge of Light', 'Forge of Light Summon a Forge of Light, enabling Blacksmithing. Blacksmithing skill increased by 10.', 'Racial', '2 seconds', '15 minutes', 'https://www.wowhead.com/spell=259930/forge-of-light', './img/icon/racial/ForgeofLight.png');
    add(Race.LightforgedDraenei, 255653, 'Demonbane', 'Demonbane Experience gained from killing Demons increased by 20%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255653/demonbane', './img/icon/racial/Demonbane.png');
    add(Race.LightforgedDraenei, 255652, 'Light\'s Reckoning', 'Light\'s Reckoning When you die the Light avenges you, dealing Holy damage to enemies within 8 yards and healing allies.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255652/lights-reckoning', './img/icon/racial/Light\'sReckoning.png');
    add(Race.LightforgedDraenei, 255651, 'Holy Resistance', 'Holy Resistance Reduces Holy damage taken by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=255651/holy-resistance', './img/icon/racial/HolyResistance.png');
    add(Race.MagharOrc, 274738, 'Ancestral Call', 'Invoke the spirits of your ancestors granting you their power. Increases a random secondary stat by 102 for 12 seconds.', 'Racial', 'Instant', '2 minutes', 'https://www.wowhead.com/spell=274738/ancestral-call', './img/icon/racial/AncestralCall.png');
    add(Race.MagharOrc, 273216, 'Open Skies', 'Increases mounted speed by 10%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=273216/open-skies', './img/icon/racial/OpenSkies.png');
    add(Race.MagharOrc, 273220, 'Savage Blood', 'Reduces the duration of Poisons, Diseases, and Curses by 10%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=273220/savage-blood', './img/icon/racial/SavageBlood.png');
    add(Race.MagharOrc, 273217, 'Sympathetic Vigor', 'Increases pet health by 10%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=273217/sympathetic-vigor', './img/icon/racial/SympatheticVigor.png');
    add(Race.DarkIronDwarf, 265221, 'Fireblood', 'Removes all poison, disease, curse, magic, and bleed effects and increases your primary stat by 100 for each effect removed. Lasts 8 sec. 2 min cooldown.', 'Racial', 'Instant', '2 minutes', 'https://www.wowhead.com/spell=265221/fireblood', './img/icon/racial/Fireblood.png');
    add(Race.DarkIronDwarf, 265225, 'Mole Machine', 'While outdoors, summon a Mole Machine that tunnels through the earth.', 'Racial', '5 seconds', '30 minutes', 'https://www.wowhead.com/spell=265225/mole-machine', './img/icon/racial/MoleMachine.png');
    add(Race.DarkIronDwarf, 265223, 'Dungeon Delver', 'While indoors, move 4% faster.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=265223/dungeon-delver', './img/icon/racial/DungeonDelver.png');
    add(Race.DarkIronDwarf, 265224, 'Forged in Flames', 'Reduces damage taken from Physical attacks by 1%.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=265224/forged-in-flames', './img/icon/racial/ForgedinFlames.png');
    add(Race.DarkIronDwarf, 265222, 'Mass Production', 'Items crafted by Blacksmithing are created twice as quickly.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=265222/mass-production', './img/icon/racial/MassProduction.png');
    add(Race.Mechagnome, 312924, 'Hyper Organic Light Originator', 'Summon 2 Organic Light duplicates to distract your foes. 3 minute cooldown.', 'Racial', 'Instant', '3 minutes', 'https://www.wowhead.com/spell=312924/hyper-organic-light-originator', './img/icon/racial/HyperOrganicLightOriginator.png');
    add(Race.Mechagnome, 312923, 'Combat Analysis', 'You gather and analyze combat data every 5 sec, increasing your primary stat by 50, stacking up to 8 times. The data decays while out of combat.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=312923/combat-analysis', './img/icon/racial/CombatAnalysis.png');
    add(Race.Mechagnome, 312896, 'Mastercraft', 'You function as a personal Blacksmithing Anvil, Cooking Fire, and Mining Forge. In addition, your limbs include every profession tool.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=312896/mastercraft', './img/icon/racial/Mastercraft.png');
    add(Race.Mechagnome, 312916, 'Emergency Failsafe', 'When you fall below 20% health, heal for 15% of your maximum health. This effect cannot occur more than once every 2.5 min.', 'Racial', 'Instant', undefined, 'https://www.wowhead.com/spell=312916/emergency-failsafe', './img/icon/racial/EmergencyFailsafe.png');
    add(Race.Mechagnome, 312890, 'Skeleton Pinkie', 'Allows opening of locked chests and doors on a level similar to yours.', 'Racial', '1.5 seconds', undefined, 'https://www.wowhead.com/spell=312890/skeleton-pinkie', './img/icon/racial/SkeletonPinkie.png');
}

addRacials();