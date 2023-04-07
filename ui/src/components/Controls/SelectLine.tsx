import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'

interface Props {
  title: string
  value?: number
  max?: number
  onSliderChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void
  onTextFieldChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectLine = ({
  title,
  value,
  max,
  onSliderChange,
  onTextFieldChange,
}: Props) => {
  return (
    <Grid item container>
      <Grid
        item
        xs={12}
        container
        justifyContent='space-between'
        alignItems='center'
      >
        <span>{title}</span>
        <TextField
          onChange={onTextFieldChange}
          size='small'
          sx={{ p: 1 }}
          type='number'
          value={value}
          InputProps={{
            inputProps: { min: '0', max: String(max), step: '1' },
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Slider onChange={onSliderChange} value={value} max={max} />
      </Grid>
    </Grid>
  )
}

export default SelectLine
