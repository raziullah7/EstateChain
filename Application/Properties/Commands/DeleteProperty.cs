using Infrastructure.Persistence;
using MediatR;

namespace Application.Properties.Commands;

public class DeleteProperty
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }
    
    public class Handler(EstateChainDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var property = await context.Properties
                .FindAsync([request.Id], cancellationToken)
                ?? throw new Exception("Property not found");

            // remove and save
            context.Remove(property);
            await context.SaveChangesAsync(cancellationToken);
        }
    }
}