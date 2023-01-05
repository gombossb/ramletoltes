import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const questions = [
	{
		'question': 'Miért jó a több RAM?',
		'answer': 'Vannak olyan alkalmazások, programok (például Google Chrome, Windows, ZFS), amiknek működésükhöz nagyon sok memóriára van szükségük. Ezek számára nagy segítséget nyújt a több memória, jobban és gyorsabban fognak futni, megszűnik az akadozás.'
	},
	{
		'question': 'Honnan tudhatom meg, milyen memóriára van szükségem?',
		'answer': 'Ez attól függően változik, hogy milyen eszközzel rendelkezik, ezt ellenőriznie kell. Ha a legmodernebb számítógéppel rendelkezik, akkor van esély rá, hogy az már a legújabb, DDR5 szabványt használó memóriát tartalmaz. Ha ettől kicsit régebbinek érzi, a legnagyobb valószínűséggel DDR4-re lesz szüksége. Ha számítógépe valamikor a világválság és dízelbotrány kirobbanása közben készült és fut rajta a Crysis, akkor DDR3-ra lesz szüksége. Ettől régebbi számítógépekhez is rendelkezünk DDR1 és DDR2 modulokkal, viszont mivel ezeket újonnan már nem gyártják, ezért készletünk korlátos és folyamatosan fogy!'
	},
	{
		'question': 'Mi a különbség a RAM és memória között?',
		'answer': 'A RAM rövidíti a Random Access Memory-t, azaz véletlen elérésű memóriát. A számítógépben az ezzel a szóval emlegetett memória leggyakrabban a DDR SDRAM típusú memóriamodulokat jelenti. A memória szó alapján azt hihetné az ember, hogy végtelen ideig vagy sokáig megőriznék tartalmukat, de ez nem így van: csak addig jegyzik meg az adatokat, amíg működés alatt van a számítógép (vagy folyékony nitrogénbe mártás esetén tovább).'
	},
	{
		'question': 'A szomszéd Jóska azt mondta, hogy ezt a számítógépet már le kellene adnom az elektronikai hulladékgyűjtőbe és vennem helyette egy MacBook-ot. Igaza van?',
		'answer': 'Ha már sikerült ezt az oldalt megnyitnia, az azt jelenti, hogy számítógépe több számítási teljesítménnyel rendelkezik, mint amivel a holdraszállást levezényelték, és egy kis plusz teljesítménnyel csodákra lehet képes.'
	}
];

const GYIK = () => {
	return (
		<div id="gyik">
			<Box marginY='.5em'>
				<Typography variant="h4" component="h4" fontWeight={600}>GY.I.K</Typography>
				{questions.map(q => (
					<Box key={q.question}>
						<Box>
							<Typography variant='h5' component='h5' fontWeight={500}>
								{q.question}
							</Typography>
						</Box>
						<Box marginBottom='.5em'>
							<Typography variant='h6' component='h6' fontWeight={400} fontSize='1.15rem' lineHeight={1.5}>
								{q.answer}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
	</div>
	);
}

export default GYIK;
