import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

const feedbacks = [
  {
    name: 'Anita',
    feedback: 'Amióta kipróbáltam, mintha tényleg gyorsabb lenne a gépem működés közben, de a bekapcsolás ugyanannyi ideig tart.'
  },
  {
    name: 'Nikolasz',
    feedback: 'Én eddig csak a lapozófájl növelés módszert ismertem, viszont aki kitalálta ezt oldalt, az egy géniusz volt, remélem írt belőle PhD-t.'
  },
  {
    name: 'Ursula',
    feedback: 'Én lenni kanos lány, keresni forró fiút, írjon rám üzenetet most!'
  },
  {
    name: 'Sándor',
    feedback: 'Nem is tudom, miért nem találtam rá korábban erre az oldalra, gépépítéskor boltból kellett vennem, de ha már akkor ismertem volna, akkor elittam volna az árát a haverokkal.'
  }
]

const Velemenyek = () => {
  return (
    <div id="velemenyek">
			<Box marginY='.5em'>
				<Typography variant="h4" component="h4" fontWeight={600}>Vélemények</Typography>
				{feedbacks.map(fb => (
					<Box key={fb.name}>
						<Box>
							<Typography variant='h5' component='h5' fontWeight={500}>
								{fb.name}:
							</Typography>
						</Box>
            <Rating name="read-only" value={5} readOnly />
						<Box marginBottom='1.2rem'>
							<Typography variant='h6' component='h6' fontWeight={400} fontSize='1.15rem' lineHeight={1.5}>
								{fb.feedback}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
	</div>
  )
}
export default Velemenyek;
